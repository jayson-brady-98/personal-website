import Link from "next/link"
import { AboutImages } from "@/components/about-images"
import { Mail, Linkedin } from "lucide-react"
import { SiX } from "@icons-pack/react-simple-icons"

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
            <div className="w-full flex justify-center mt-16 sm:mt-0">
              {/* Heading and image in same row */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex flex-col space-y-1 text-center md:text-left order-2 md:order-1">
                  <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl/none font-bold tracking-tighter text-[#4B827D]">
                    Jayson Brady
                  </h1>
                  <p className="text-base sm:text-base md:text-lg lg:text-xl text-[#C94128]" style={{ fontFamily: "'Space Mono', monospace" }}>
                    Jack of all trades, master of some
                  </p>
                </div>
                
                {/* Image - to the side of name */}
                <div className="w-[120px] sm:w-[120px] md:w-[140px] aspect-square order-1 md:order-2">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <AboutImages />
                  </div>
                </div>
              </div>
            </div>

            {/* Story Section - now full width */}
            <div className="w-full">
              <div className="relative border rounded-lg border-[#4B827D]/30 p-4 sm:p-6 bg-white/95 backdrop-blur-sm overflow-hidden group">
                <div className="space-y-4 relative">
                  <div className="space-y-3 sm:space-y-4 text-[#4B827D] text-sm sm:text-base" style={{ fontFamily: "'Space Mono', monospace" }}>
                    <p>I&apos;ve always loved making things. In my younger years it was songs and stories; more recently it&apos;s been apps, digital products, and essays. I just love the process of taking things from zero to one, from idea to fully-made thing.</p>
                    <p>After finishing my psychology degree, I realised that I didn&apos;t actually want to be a clinician. During the pandemic, I&apos;d read some business books and become fascinated by startups and technology. So I spent the next few years trying things: building a business, working in a startup, working in sales, working in product, copywriting, design, operations -- I tried so many different things as I looked for what I wanted to spend my life working on.</p>
                    <p>But after my time at Gumroad where I got to work alongside world-class engineers and designers, I realised I wanted to spend my career working on great products. I was lucky enough to see how software is built, pitch ideas that shipped, create product mockups, write UX copy, and ship code (with the help of Curser). Then while looking for my next product role, I built an app that really cemented by love for taking ideas from conception to MVP and letting domain experts refine the idea from there. I&apos;ve come to see my strength as generating creative ideas and finding innovative solutions to problems.</p>
                    <p>Outside of work, I love reading about history, tech, philosophy and physics, camping, and rewatching sitcoms (Parks and Rec, Friends, Modern Family, Seinfeld, etc.).</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Section - Simplified */}
            <div className="w-full mt-0 pb-12">
              <div className="text-center">
                
                <div className="flex justify-center gap-8 mt-1">
                  <Link 
                    href="mailto:jaysonbrady123@gmail.com"
                    className="text-[#4B827D] hover:text-[#EEA139] transition-colors transform hover:scale-110"
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-white p-3 rounded-full border-2 border-[#4B827D]">
                        <Mail className="w-6 h-6" />
                      </div>
                      <span className="text-sm mt-2 font-medium">Email</span>
                    </div>
                  </Link>

                  <Link 
                    href="https://linkedin.com/in/jayson-brady-93ba8614b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4B827D] hover:text-[#EEA139] transition-colors transform hover:scale-110"
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-white p-3 rounded-full border-2 border-[#4B827D]">
                        <Linkedin className="w-6 h-6" />
                      </div>
                      <span className="text-sm mt-2 font-medium">LinkedIn</span>
                    </div>
                  </Link>

                  <Link 
                    href="https://x.com/jaysonbradyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4B827D] hover:text-[#EEA139] transition-colors transform hover:scale-110"
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-white p-3 rounded-full border-2 border-[#4B827D]">
                        <SiX className="w-6 h-6" />
                      </div>
                      <span className="text-sm mt-2 font-medium">Twitter</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

