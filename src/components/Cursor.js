"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    const links = document.querySelectorAll("a, button");

    links.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      links.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.img
      src="/imagens/cursor.png"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: position.x - 5,
        y: position.y - 5,
        scale: hovering ? 1.5 : 1,
      }}
      transition={{
        duration: 1.5,
        type: "spring",
        stiffness: 800,
        damping: 50,
      }}
      className="hidden md:block pointer-events-none fixed top-0 left-0 z-[200] h-8 w-8 border-yellow-400"
    ></motion.img>
  );
}
