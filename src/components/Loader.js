"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 2.5, opacity: 0.6 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        src="/imagens/Icone branco.webp"
        alt="Amplifica"
        className="h-10"
      ></motion.img>
    </motion.div>
  );
}
