import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { RotatingBackground } from "@/components/rotating-background"
import { AboutImages } from "@/components/about-images"

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background color with gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7DAAC] via-[#F7DAAC] to-transparent" />
        
        {/* Pattern Option 3: Wavy Lines */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-opacity-100 via-opacity-50 to-transparent"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 10px, #4B827D 10px, #4B827D 11px),
              repeating-linear-gradient(-45deg, transparent, transparent 10px, #EEA139 10px, #EEA139 11px),
              repeating-linear-gradient(90deg, transparent, transparent 10px, #C94128 10px, #C94128 11px)
            `,
            backgroundSize: '100px 100px',
            opacity: 0.1,
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 70%)'
          }}
        />
        
        {/* Subtle grain texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")',
          }}
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-24 text-center">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
            <div className="space-y-12 w-full lg:max-w-[66%] text-left">
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl/none font-bold tracking-tighter text-[#4B827D]">
                    Jayson Brady
                  </h1>
                  <p className="text-base md:text-xl text-[#C94128]" style={{ fontFamily: "'Space Mono', monospace" }}>
                    Jack of all trades, master of some
                  </p>
                </div>
              </div>
              <div className="relative border rounded-lg border-[#4B827D]/30 p-6 bg-white/90 backdrop-blur-sm overflow-hidden group">
                <div className="space-y-4 relative">
                  <h2 className="text-2xl font-bold text-[#C94128]">
                    I built my first product when I was 7-years-old.
                  </h2>
                  <div className="space-y-4 text-[#4B827D]" style={{ fontFamily: "'Space Mono', monospace" }}>
                    <p>It wasn&apos;t built on Rails or Javascript. It was built on envy.</p>
                    <p>I was surrounded by friends at school who had a Nintendo DS. I wanted one too, but I was raised in a household that taught me: If you want it, save up to buy it yourself.</p>
                    <p>Unfortunately, my dollar-per-week pocket money wasn&apos;t going to get me there.</p>
                    <p>So I decided to build one myself.</p>
                    <p>Employing some fine cardboard-based craftsmanship, I created little hinges, drew on buttons, and sketched Super Mario Bros on the screen. It lacked the rigidity of hard plastic and the graphics of, well, anything with a graphics chip; but that didn&apos;t matter to me.</p>
                    <p>I had created what I wanted with what I had.</p>
                    <p>This was my first step into creating things.</p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/work-history">
                      <Button size="lg" className="w-full min-[400px]:w-auto bg-[#EEA139] hover:bg-[#4B827D] text-white">
                        View My Work History
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <AboutImages />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative">
        <RotatingBackground className="inset-0" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-6 pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7DAAC] mb-12">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg border-white/10 p-6 backdrop-blur-sm">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-[#C94128]">nextpromo.io</h3>
                <div className="flex gap-2">
                  <Badge className="bg-[#4B827D] hover:bg-[#4B827D]">Current project</Badge>
                  <Badge className="bg-[#EEA139] hover:bg-[#EEA139]">Founder</Badge>
                </div>
                <p className="text-[#4B827D]">
                  A platform that helps consumers save money by predicting when the next sale will be for their favourite ecommerce brands.
                </p>
                <div className="overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src="/projects/nextpromo-preview.png"
                    alt="nextpromo.io preview"
                    width={1200}
                    height={630}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
                <Link href="https://nextpromo.io" target="_blank" className="mt-4 block">
                  <Button size="lg" className="w-full min-[400px]:w-auto bg-[#EEA139] hover:bg-[#4B827D] text-white">
                    Visit website <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border rounded-lg border-white/10 p-6 backdrop-blur-sm">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-[#C94128]">Helper.ai</h3>
                <div className="flex gap-2">
                  <Badge className="bg-[#C94128] hover:bg-[#C94128]">Previous project</Badge>
                  <Badge className="bg-[#EEA139] hover:bg-[#EEA139]">Individual contributor</Badge>
                </div>
                <p className="text-[#4B827D]">
                  An AI-powered customer service automation platform that helps businesses streamline their support workflows.
                </p>
                <div className="overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src="/projects/helper-preview.png"
                    alt="Helper.ai preview"
                    width={1200}
                    height={630}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
                <Link href="https://jmbrady.notion.site/Helper-1319d40c3136806cb5c9ee7edf77a4ae?pvs=4" target="_blank" className="mt-4 block">
                  <Button size="lg" className="w-full min-[400px]:w-auto bg-[#EEA139] hover:bg-[#4B827D] text-white">
                    View portfolio <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

