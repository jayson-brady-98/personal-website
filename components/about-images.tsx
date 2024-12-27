"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

function AboutImagesClient({ imageSrc, imageAlt, color }: { imageSrc: string; imageAlt: string; color: string }) {
  const [mounted, setMounted] = useState(false)
  const [imageLoadError, setImageLoadError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleImageError = () => {
    console.log(`Failed to load image: ${imageSrc}`)
    setImageLoadError(true)
  }

  if (!mounted) return null

  return (
    <div className="absolute inset-0">
      {!imageLoadError && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          style={{
            filter: 'contrast(1.1) saturate(1.2)',
            objectPosition: 'center 30%',
            backgroundColor: color,
          }}
          priority
          onError={handleImageError}
        />
      )}
    </div>
  )
}

export function AboutImages() {
  return (
    <div className="relative w-full h-full">
      <AboutImagesClient 
        imageSrc="/headshots/Headshot.png"
        imageAlt="Profile headshot"
        color="#C94128"
      />
    </div>
  )
} 