"use client"

import { useEffect, useState } from 'react'
import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"

export function RotatingBackground({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const backgroundY = useTransform(scrollY, [0, 3000], [0, -1200])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className={`fixed inset-0 -z-10 ${className ?? ''}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/backgrounds/bg5.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 225px',
          backgroundRepeat: 'no-repeat',
          height: '200vh'
        }} />
      </div>
    )
  }

  return (
    <div className={`fixed inset-0 -z-10 ${className ?? ''}`}>
      <motion.div
        ref={ref}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/backgrounds/bg5.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 225px',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
          height: '200vh'
        }}
      />
    </div>
  )
} 