"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <>
      {/* HEADER DESKTOP */}
      <header className="hidden md:flex sticky top-5 z-20 bg-black/30 backdrop-blur-md px-6 py-4 rounded-full shadow-lg max-w-7xl mx-auto items-center justify-between">

        <a href="#" aria-label="Voltar para a página inicial">
          <img
            src="/imagens/Tipografia branco.webp"
            alt="Amplifica"
            className="h-10"
          />
        </a>

        <nav className="flex space-x-6 text-lg">
          <a href="#servicos" className="hover:text-yellow-400 transition">
            Serviços
          </a>

          <a href="#sobre" className="hover:text-yellow-400 transition">
            Sobre
          </a>

          <a href="#contato" className="hover:text-yellow-400 transition">
            Contato
          </a>
        </nav>

        <a
          href="https://wa.me/5511976589202"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter px-4 py-2 bg-yellow-500 text-black font-semibold text-base rounded-full hover:scale-105 transition"
        >
          Quero Amplificar
        </a>

      </header>

      {/* NAVBAR MOBILE (estilo app) */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full shadow-2xl"
      >

        <div className="flex items-center gap-8 text-sm">

          <a
            href="#servicos"
            className="flex flex-col items-center text-gray-200 hover:text-yellow-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 11H5m14-4H5m14 8H5" />
            </svg>
            Serviços
          </a>

          <a
            href="#sobre"
            className="flex flex-col items-center text-gray-200 hover:text-yellow-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M12 6h.01" />
            </svg>
            Sobre
          </a>

          <a
            href="https://wa.me/5511976589202"
            className="flex flex-col items-center text-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mb-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.77 11.77 0 0012.03 0C5.41 0 .03 5.37.03 12c0 2.12.55 4.19 1.6 6.02L0 24l6.17-1.62A11.94 11.94 0 0012.03 24C18.65 24 24 18.63 24 12c0-3.18-1.24-6.17-3.48-8.52z"/>
            </svg>
            WhatsApp
          </a>

        </div>
      </motion.nav>
    </>
  )
}