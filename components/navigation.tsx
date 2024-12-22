"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Quote, Book, Music } from 'lucide-react'

const links = [
  { href: "/", label: "About" },
  { href: "/work-history", label: "Work History" },
  { href: "/writing", label: "Writing" },
]

const dropdownLinks = [
  { 
    href: "/favourites/quotes", 
    label: "Quotes",
    icon: <Quote className="w-4 h-4 text-[#4B827D]" />
  },
  { 
    href: "/favourites/reads", 
    label: "Reads",
    icon: <Book className="w-4 h-4 text-[#4B827D]" />
  },
  { 
    href: "/favourites/songs", 
    label: "Songs",
    icon: <Music className="w-4 h-4 text-[#4B827D]" />
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isInFavourites = pathname?.startsWith('/favourites')

  const NavigationContent = () => (
    <div className="flex gap-6 text-center">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "relative text-base font-semibold transition-colors hover:text-[#EEA03B]",
            pathname === href ? "text-[#EEA03B]" : "text-[#F7DAAC]"
          )}
        >
          {label}
          {pathname === href && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 top-full h-0.5 w-full bg-[#EEA03B]"
            />
          )}
        </Link>
      ))}
      
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={cn(
            "relative text-base font-semibold transition-colors hover:text-[#EEA03B]",
            isInFavourites ? "text-[#EEA03B]" : "text-[#F7DAAC]"
          )}
        >
          Favourite Things
          {isInFavourites && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 top-full h-0.5 w-full bg-[#EEA03B]"
            />
          )}
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 w-40 bg-[#C94128] rounded-md shadow-lg">
            {dropdownLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex px-4 py-2 text-sm transition-colors hover:text-[#EEA03B] hover:bg-[#B33821] items-center gap-2",
                  pathname === href ? "text-[#EEA03B]" : "text-[#F7DAAC]"
                )}
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  if (!mounted) {
    return (
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#C94128]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-center items-center">
            <NavigationContent />
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#C94128]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-center items-center">
          <NavigationContent />
        </div>
      </div>
    </nav>
  )
}

