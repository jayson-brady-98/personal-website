"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const links = [
  { href: "/", label: "About" },
  { href: "/work-history", label: "Work History" },
  { href: "/writing", label: "Writing" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#C94128]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-center items-center">
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#C94128]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-center items-center">
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
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '100%',
                      height: '2px',
                      width: '100%',
                      background: '#EEA03B',
                      transition: 'left 0.3s ease, width 0.3s ease',
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

