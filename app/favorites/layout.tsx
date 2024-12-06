import Link from "next/link"
import { cn } from "@/lib/utils"

const tabs = [
  { href: "/favorites/quotes", label: "Quotes" },
  { href: "/favorites/reads", label: "Reads" },
  { href: "/favorites/songs", label: "Songs" },
]

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container relative space-y-8 pt-24">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Favorite Things</h1>
        <p className="mt-4 text-muted-foreground">A collection of things that inspire and motivate me.</p>
      </div>
      <div className="flex gap-6 border-b border-white/10">
        {tabs.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "border-b-2 border-transparent pb-2.5 text-sm font-medium text-muted-foreground hover:text-pink-500",
              "hover:border-pink-500"
            )}
          >
            {label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  )
}

