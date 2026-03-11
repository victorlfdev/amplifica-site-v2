"use client"

import { motion } from "framer-motion"
import { fadeLeft, fadeRight, fadeUp } from "../lib/animations"
import { reveal } from "../lib/animations"

export default function Sobre() {

  return (

    <motion.section 
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false }} 
    id="sobre" 
    className="py-20 px-6 bg-black/40 text-gray-200">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <motion.img
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          src="/imagens/equipe.png"
          className="rounded-xl shadow-lg"
        />

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >

          <h2 className="font-salvatore text-4xl text-yellow-400 mb-6">
            Sobre a Amplifica
          </h2>

          <p>
            Somos um estúdio criativo focado em estratégia e audiovisual.
          </p>

        </motion.div>

      </div>

    </motion.section>
  )
}