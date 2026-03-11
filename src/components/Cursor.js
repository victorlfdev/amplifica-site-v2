"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const handleMouseEnter = () => setHovering(true)
    const handleMouseLeave = () => setHovering(false)

    const links = document.querySelectorAll("a, button")

    links.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)

      links.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }

  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: hovering ? 2 : 1
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 50
      }}
      className="pointer-events-none fixed top-0 left-0 z-[200] h-6 w-6 rounded-full bg-yellow-400"
    />
  )
}