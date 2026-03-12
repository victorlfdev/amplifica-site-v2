export default function Header() {
  return (
    <header className="sticky top-5 z-20 bg-black/30 backdrop-blur-md px-6 py-4 rounded-full shadow-lg max-w-7xl mx-auto flex items-center justify-between">
      <img
        src="/imagens/Tipografia branco.webp"
        alt="Amplifica"
        className="h-10"
      />

      <nav className="hidden md:flex space-x-6 text-lg">
        <a href="#servicos" className="hover:text-yellow-400">
          Serviços
        </a>
        <a href="#sobre" className="hover:text-yellow-400">
          Sobre
        </a>
        <a href="#contato" className="hover:text-yellow-400">
          Contato
        </a>
      </nav>

      <a
        href="https://wa.me/5511976589202"
        className="hidden md:inline-flex px-4 py-2 bg-yellow-500 text-black rounded-full"
      >
        Quero Amplificar
      </a>
    </header>
  );
}
