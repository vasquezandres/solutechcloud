import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="text-gray-600 mt-2">
        Cuéntanos brevemente qué necesitas y te respondemos.
      </p>
      <div className="mt-6">
        <ContactForm />
      </div>
    </>
  );
}
