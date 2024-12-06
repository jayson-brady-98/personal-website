import { Button } from "@/components/ui/button"
import { Cpu } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="container relative pt-24">
      <div className="grid gap-12 px-8 md:px-16 lg:px-24">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#cba78e]">
              Jayson Brady
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Jack of all trades, master of some
            </p>
          </div>
        </div>
        <div className="grid gap-8 border rounded-lg border-white/10 p-6 backdrop-blur-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#cba78e]">I built my first product when I was 7-years-old.</h2>
            <p className="text-muted-foreground">
              It wasn’t built on Rails or Javascript or Python. It was built on envy.
            </p>
            <p className="text-muted-foreground">
            All around me were friends who had, and brought to school, a Nintendo DS. And it was only through good parenting that I didn’t have one. I was raised in a household that taught me, when it came to such luxuries: If you want it, you can save up to buy it yourself.
            </p>
            <p className="text-muted-foreground">
            The problem was, I was earning about a dollar a week in pocket money; only I didn’t have the patience to save X weeks to obtain this object of desire.
            </p>
            <p className="text-muted-foreground">
            So I decided to build one myself.
            </p>
            <p className="text-muted-foreground">
            I created my very own DS (game cartridges and all) out of cardboard. I made little hinges, drawn on buttons, and sketched Super Mario Bros on the screen. It was picture perfect, except it lacked the rigidity of (whatever DS’s are made out of) and the graphics of (whatever they’re powered by). 
            </p>
            <p className="text-muted-foreground">
            But that didn’t matter to me. I took my creation to school the following day to join my friends in the playground. I have no recollection of what their reactions where when I pulled my cardboard device out of my bag, probably because it didn’t bother me.             
            </p>
            <p className="text-muted-foreground">
            I had created what I wanted.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/work-history">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  View My Work History
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

