"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { reveal } from "../lib/animations";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Carrossel() {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      id="carrossel"
      className="mt-40 py-12 px-6 mb-40"
    >
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        autoplay={{ delay: 4000 }}
        effect="fade"
        loop
        className="max-w-[1100px] mx-auto rounded-[32px]"
      >
        <SwiperSlide>
          <div className="relative group h-96 rounded-lg overflow-hidden">
            <img
              src="/imagens/transmissaoAoVivo.webp"
              className="h-full w-full object-cover group-hover:scale-110 transition"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-3xl font-semibold">
              Transmissão ao vivo
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative group h-96 rounded-lg overflow-hidden">
            <img
              src="/imagens/Video Pro.webp"
              className="h-full w-full object-cover group-hover:scale-110 transition"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-3xl font-semibold">
              Vídeo Promocional
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
}
