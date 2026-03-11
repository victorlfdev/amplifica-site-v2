"use client"

import { motion } from "framer-motion"
import { fadeUp } from "../lib/animations"
import { reveal } from "../lib/animations"

export default function Hero() {
    return (
        
      <motion.section 
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 mt-40 mb-40">
  
        <motion.h1 
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="font-salvatore text-5xl font-bold mb-6">
          Amplificando ideias, criando conexões
        </motion.h1>
  
        <motion.p 
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="text-lg mb-8 max-w-2xl">
          Marketing, audiovisual e estratégias digitais para sua marca crescer
        </motion.p>
  
        <motion.a
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: false, margin: "-100px" }}
          href="#contato"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg"
        >
          Quero Amplificar
        </motion.a>

      </motion.section>
    )
  }