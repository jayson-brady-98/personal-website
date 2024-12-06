"use client"

import { useScroll, motion, useTransform, HTMLMotionProps } from "framer-motion"
import { useRef } from "react"

export function RotatingBackground({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const backgroundY = useTransform(scrollY, [0, 3000], [0, -800])

  return (
    <motion.div
      ref={ref}
      className={`fixed -z-10 ${className ?? ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/backgrounds/bg5.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 225px',
        backgroundRepeat: 'no-repeat',
        y: backgroundY,
        top: 0,
        bottom: '-300px'
      }}
    />
  )
} 