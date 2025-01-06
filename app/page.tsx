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

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-12 sm:pt-24">
          {/* Profile Section */}
          <div className="flex flex-col gap-8">
            {/* Name, Title, and Image */}
            <div className="w-full flex flex-col md:flex-row gap-8">
              <div className="space-y-6">
                {/* Heading and image in same row */}
                <div className="flex flex-row items-center gap-2 md:gap-8">
                  <div className="flex flex-col space-y-1 max-w-[80%] md:max-w-none -mt-2 md:mt-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl/none font-bold tracking-tighter text-[#4B827D]">
                      Jayson Brady
                    </h1>
                    <p className="text-base md:text-xl text-[#C94128] pr-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                      Jack of all trades, master of some
                    </p>
                  </div>
                  
                  {/* Image - with larger top margin */}
                  <div className="mt-8 md:mt-6 w-[120px] md:w-[120px] aspect-square flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <AboutImages />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Section - now full width */}
            <div className="w-full">
              <div className="relative border rounded-lg border-[#4B827D]/30 p-4 sm:p-6 bg-white/95 backdrop-blur-sm overflow-hidden group">
                <div className="space-y-4 relative">
                  <div className="space-y-3 sm:space-y-4 text-[#4B827D] text-sm sm:text-base" style={{ fontFamily: "'Space Mono', monospace" }}>
                    <p>I&apos;m a scrappy product generalist who&apos;s always loved creating things. In my younger years it was songs and stories; more recently it&apos;s been digital products and essays.</p>
                    <p>After finishing my psychology degree, I spent the next few working years in a bunch of different roles. But after my time at Antiwork.com where I helped build an app alongside world-class engineers and designers, I realised I wanted to spend my career working on great products.</p>
                    <p>When I&apos;m not making something, I&apos;m usually reading about tech or history, or rewatching sitcoms (Parks and Recreation, Friends, Modern Family, Seinfeld, etc.).</p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/work-history">
                      <Button size="lg" className="w-full min-[400px]:w-auto bg-[#EEA139] hover:bg-[#4B827D] text-white font-semibold">
                        View My Work History
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative">
        <RotatingBackground className="inset-0" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-6 pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7DAAC] mb-12">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg border-white/10 p-4 sm:p-6 backdrop-blur-sm">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-[#C94128]">nextpromo.io</h3>
                <div className="flex gap-2">
                  <Badge className="bg-[#4B827D] hover:bg-[#4B827D] font-normal">Current project</Badge>
                  <Badge className="bg-[#EEA139] hover:bg-[#EEA139] font-normal">Founder</Badge>
                </div>
                <p className="text-[#4B827D] text-sm sm:text-base">
                  A website that helps consumers save money by predicting when the next sale will be for their favourite ecommerce brands. Currently in beta while I try to improve the data quality.
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
                  <Button size="lg" className="w-full min-[400px]:w-auto bg-[#EEA139] hover:bg-[#4B827D] text-white hover:text-white">
                    <span className="mt-0.5 font-semibold">Visit website <ArrowUpRight className="ml-2 h-4 w-4 inline-block" /></span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border rounded-lg border-white/10 p-6 backdrop-blur-sm">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-[#C94128]">Helper.ai</h3>
                <div className="flex gap-2">
                  <Badge className="bg-[#C94128] hover:bg-[#C94128] font-normal">Previous project</Badge>
                  <Badge className="bg-[#EEA139] hover:bg-[#EEA139] font-normal">Individual contributor</Badge>
                </div>
                <p className="text-[#4B827D]">
                  An AI-powered customer service automation platform that helps businesses streamline their support workflows. I did everything from feature planning to UX writing and mockups in Figma to deploying code.
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
                  <Button size="lg" className="w-full min-[400px]:w-auto bg-[#EEA139] hover:bg-[#4B827D] text-white hover:text-white">
                    <span className="mt-0.5 font-semibold">View portfolio <ArrowUpRight className="ml-2 h-4 w-4 inline-block" /></span>
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

