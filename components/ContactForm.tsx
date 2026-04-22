"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

/**
 * Formulario de contacto con:
 *  - Formspree (para recibir los mensajes por email)
 *  - Cloudflare Turnstile (anti-spam, sin captchas molestos)
 *  - Validación cliente
 *  - UX de estados (loading / success / error)
 *
 * Requiere variables de entorno (en .env.local):
 *   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXXX
 *   NEXT_PUBLIC_TURNSTILE_SITE_KEY=xxxxxxxxxxxxxxxxxx
 *
 * Cómo obtenerlas:
 *   Formspree:  https://formspree.io/forms (plan gratis: 50 envíos/mes)
 *   Turnstile:  https://dash.cloudflare.com → Turnstile (gratis, ilimitado)
 */

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  // Cargar script de Turnstile una sola vez
  useEffect(() => {
    if (!TURNSTILE_KEY) return;

    const scriptId = "turnstile-script";
    if (document.getElementById(scriptId)) {
      renderTurnstile();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = renderTurnstile;
    document.head.appendChild(script);

    function renderTurnstile() {
      if (!window.turnstile || !turnstileRef.current || !TURNSTILE_KEY) return;
      // Evitar doble render
      if (turnstileWidgetId.current) return;

      turnstileWidgetId.current = window.turnstile.render(
        turnstileRef.current,
        {
          sitekey: TURNSTILE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          "error-callback": () => setTurnstileToken(""),
          "expired-callback": () => setTurnstileToken(""),
          theme: "light",
        }
      );
    }
  }, [TURNSTILE_KEY]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORMSPREE) {
      setStatus("error");
      setErrorMsg(
        "Formulario sin configurar. Contáctanos por WhatsApp mientras tanto."
      );
      return;
    }

    if (TURNSTILE_KEY && !turnstileToken) {
      setStatus("error");
      setErrorMsg("Por favor completa la verificación anti-spam.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    if (turnstileToken) {
      formData.append("cf-turnstile-response", turnstileToken);
    }

    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        if (window.turnstile && turnstileWidgetId.current) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
        setTurnstileToken("");
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "No se pudo enviar el formulario");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Error al enviar. Intenta por WhatsApp."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card max-w-2xl">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="size-6 text-green-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-lg">Mensaje recibido</h3>
            <p className="mt-2 text-gray-600">
              Gracias por contactarnos. Te responderemos en menos de 24 horas
              hábiles. Si es urgente, escríbenos por WhatsApp al{" "}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand font-medium underline"
              >
                {siteConfig.contact.whatsappDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-4 max-w-2xl">
      {/* Honeypot anti-bot (campo oculto que bots suelen rellenar) */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre completo *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={100}
          className="rounded-xl border border-gray-300 px-3 py-2 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
          placeholder="Juan Pérez"
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="organization" className="text-sm font-medium">
            Empresa / Institución *
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            maxLength={150}
            className="rounded-xl border border-gray-300 px-3 py-2 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
            placeholder="Nombre de tu organización"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Correo corporativo *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl border border-gray-300 px-3 py-2 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
            placeholder="tu@empresa.com"
          />
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Teléfono / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="rounded-xl border border-gray-300 px-3 py-2 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
            placeholder="+507 0000-0000"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="topic" className="text-sm font-medium">
            ¿En qué te ayudamos? *
          </label>
          <select
            id="topic"
            name="topic"
            required
            defaultValue=""
            className="rounded-xl border border-gray-300 px-3 py-2 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition bg-white"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="microsoft-365">Licenciamiento Microsoft 365</option>
            <option value="correo">Correo corporativo</option>
            <option value="azure-aws">Infraestructura Azure / AWS</option>
            <option value="seguridad">Seguridad y backup</option>
            <option value="migracion">Migración</option>
            <option value="gobierno">Sector público / licitación</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className="rounded-xl border border-gray-300 px-3 py-2 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition resize-y"
          placeholder="Cuéntanos brevemente qué necesitas: cantidad de usuarios, plan actual, objetivos, plazos..."
        />
      </div>

      {/* Turnstile widget */}
      {TURNSTILE_KEY && <div ref={turnstileRef} className="my-2" />}

      {status === "error" && (
        <div
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800"
          role="alert"
        >
          <AlertCircle className="size-5 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Send className="size-4" />
              Enviar mensaje
            </>
          )}
        </button>

        <span className="text-sm text-gray-500">
          O escríbenos por{" "}
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium underline"
          >
            WhatsApp
          </a>
        </span>
      </div>

      <p className="text-xs text-gray-500">
        Al enviar este formulario aceptas nuestra{" "}
        <a href="/legal/privacidad/" className="underline hover:text-brand">
          Política de Privacidad
        </a>
        . Tus datos se usan únicamente para responder tu consulta.
      </p>
    </form>
  );
}
