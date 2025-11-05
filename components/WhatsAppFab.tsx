"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function WhatsAppFab(){
  return (
    <Link href="https://wa.me/50768886778" target="_blank" aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center rounded-full shadow-xl bg-green-500 text-white w-14 h-14 hover:opacity-90 transition">
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
    </Link>
  );
}
