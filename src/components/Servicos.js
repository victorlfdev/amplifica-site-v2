"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { container, card } from "../lib/animations";
import { reveal } from "../lib/animations";

export default function Servicos() {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      id="servicos"
      className="pt-36 px-6 max-w-6xl mx-auto"
    >
      {/* Título */}

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "0px" }}
        className="font-salvatore text-4xl font-extrabold text-center mb-16 text-yellow-400"
      >
        O que oferecemos
      </motion.h2>

      {/* Container */}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid md:grid-cols-3 gap-16"
      >
        {/* Card 1 */}

        <motion.div
          variants={card}
          whileHover={{
            scale: 1.06,
            y: -10,
          }}
          className="relative p-8 rounded-xl border border-gray-300/20 bg-white/5 backdrop-blur-md text-gray-200 shadow-lg transition-all duration-300 hover:border-yellow-400 hover:shadow-yellow-500/30"
        >
          {/* Glow */}

          <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition duration-500 bg-yellow-500/10 blur-xl -z-10"></div>

          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM12 14v7m-4-4h8"
              />
            </svg>
          </div>

          <h3 className="font-semibold text-xl mb-3 text-center">
            Gestão de Redes
          </h3>

          <p className="text-center">
            Criamos estratégias personalizadas para aumentar engajamento e
            relevância. Desde o planejamento até a análise de métricas.
          </p>
        </motion.div>

        {/* Card 2 */}

        <motion.div
          variants={card}
          whileHover={{
            scale: 1.06,
            y: -10,
          }}
          className="relative p-8 rounded-xl border border-gray-300/20 bg-white/5 backdrop-blur-md text-gray-200 shadow-lg transition-all duration-300 hover:border-yellow-400 hover:shadow-yellow-500/30"
        >
          <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition duration-500 bg-yellow-500/10 blur-xl -z-10"></div>

          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m0 0V10m0 4l-4 2m4-2l-4-2m0 0V8m0 4v4"
              />
            </svg>
          </div>

          <h3 className="font-semibold text-xl mb-3 text-center">
            Produção Audiovisual
          </h3>

          <p className="text-center">
            Desenvolvemos vídeos e fotografias profissionais que contam
            histórias e fortalecem sua marca.
          </p>
        </motion.div>

        {/* Card 3 */}

        <motion.div
          variants={card}
          whileHover={{
            scale: 1.06,
            y: -10,
          }}
          className="relative p-8 rounded-xl border border-gray-300/20 bg-white/5 backdrop-blur-md text-gray-200 shadow-lg transition-all duration-300 hover:border-yellow-400 hover:shadow-yellow-500/30"
        >
          <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition duration-500 bg-yellow-500/10 blur-xl -z-10"></div>

          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 17a4 4 0 01-8 0V5a2 2 0 012-2h14a2 2 0 012 2v6a4 4 0 01-8 0H7v6a2 2 0 002 2h2z"
              />
            </svg>
          </div>

          <h3 className="font-semibold text-xl mb-3 text-center">
            Campanhas Digitais
          </h3>

          <p className="text-center">
            Planejamos anúncios online com foco em performance para gerar leads
            e vendas.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
