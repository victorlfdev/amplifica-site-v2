export default function Contato() {
  return (
    <section
      id="contato"
      className="py-20 px-6 bg-black/40 text-gray-200 text-center"
    >
      <h2 className="font-salvatore text-3xl font-bold mb-8 text-yellow-400 uppercase drop-shadow-lg">
        Vamos amplificar sua marca?
      </h2>

      <p className="mb-6">Entre em contato pelo WhatsApp ou e-mail.</p>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a
          href="https://wa.me/5511919837497"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600"
        >
          WhatsApp
        </a>

        <a
          href="mailto:amplifica@usd21.org"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600"
        >
          Enviar E-mail
        </a>
      </div>
    </section>
  );
}
