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
          className="object-cover rounded-lg"
          style={{
            filter: 'contrast(1.1) saturate(1.2)',
            objectPosition: 'center 20%',
            borderColor: color
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
    <div className="flex flex-col gap-6 w-full">
      <div className="relative aspect-[3/4] w-full bg-[#C94128]/5">
        <div className="absolute inset-0 bg-[#C94128] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
        <AboutImagesClient 
          imageSrc="/headshots/Headshot.png"
          imageAlt="Profile headshot"
          color="#C94128"
        />
        <div className="absolute inset-0 border-2 border-[#C94128]/30 rounded-lg" />
      </div>
      
      {/* Social Icons */}
      <div className="flex justify-center gap-4">
        {/* Email Icon */}
        <a href="mailto:jaysonbrady123@gmail.com" target="_blank" rel="noopener noreferrer" 
           className="text-[#EEA139] hover:text-[#C94128] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>

        {/* LinkedIn Icon */}
        <a href="https://linkedin.com/in/jayson-brady-93ba8614b/" target="_blank" rel="noopener noreferrer"
           className="text-[#EEA139] hover:text-[#C94128] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        {/* Twitter/X Icon */}
        <a href="https://x.com/jaysonbradyy" target="_blank" rel="noopener noreferrer"
           className="text-[#EEA139] hover:text-[#C94128] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
          </svg>
        </a>
      </div>
    </div>
  )
} 