"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const links = [
  { href: "/", label: "About" },
  { href: "/work-history", label: "Work history" },
  { href: "/favorites", label: "My Favorite Things" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-center items-center">
          <div className="flex gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative text-sm transition-colors hover:text-pink-500",
                  pathname === href ? "text-pink-500" : "text-muted-foreground"
                )}
              >
                {pathname === href && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '100%',
                      height: '1px',
                      width: '100%',
                      background: 'linear-gradient(to right, #ec4899, #06b6d4)'
                    }}
                  />
                )}
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

