"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const links = [
  { href: "/", label: "About" },
  { href: "/work-history", label: "Work History" },
  { href: "/favorites", label: "My Favorite Things" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
              Your Name
            </span>
          </Link>
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
                    className="absolute left-0 top-full h-px w-full bg-gradient-to-r from-pink-500 to-cyan-500"
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

