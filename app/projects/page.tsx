import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { RotatingBackground } from "@/components/rotating-background"
import { Lightbulb } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen">
      <RotatingBackground className="inset-0" />
      <div 
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-12 pb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7DAAC] mb-12 text-center pt-16">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg border-white/10 p-4 sm:p-6 bg-black/70">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-[#C94128]">NextPromo.io</h3>
              <div className="flex gap-2">
                <Badge className="bg-[#4B827D] hover:bg-[#4B827D] font-normal">Current project</Badge>
              </div>
              <p className="text-[#4B827D] text-sm sm:text-base">
                My partner repeatedly found her self in the frustrating situation of purchasing a product, only for it to go on sale days later. So, I built a website that helps consumers save money by aggregating data on previous sales so that people can try and predict when the next sale will be for their favourite ecommerce brands. I&apos;ve fully built it, but now I just need to add more brands and market it.
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

          <div className="border rounded-lg border-white/10 p-6 bg-black/70">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-[#C94128]">Helper.ai</h3>
              <div className="flex gap-2">
                <Badge className="bg-[#C94128] hover:bg-[#C94128] font-normal">Previous project</Badge>
              </div>
              <p className="text-[#4B827D]">
                I worked on an AI-powered customer service automation platform that helps businesses streamline their support workflows. I did everything from feature planning to UX writing and mockups in Figma to deploying code.
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
        
        {/* Ideas Section */}
        <div className="mt-24 mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7DAAC] mb-12 text-center">
            Ideas
          </h2>
          <p className="text-center text-[#4B827D] max-w-2xl mx-auto mb-12">
            I love coming up with cool ideas for things to build. But there&apos;s only so much time, even with the capability of AI. Here are my current favourite ideas that I&apos;d love to build one day, but would be delighted if someone beat me to them (or if someone wanted to collaborate).
          </p>
          
          <div className="space-y-6">
            {/* Idea Card 1 */}
            <div className="bg-black/70 rounded-lg p-6 border border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#EEA139]/20 text-[#EEA139]">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#EEA139] mb-2">Open Source Diary</h3>
                  <p className="text-[#4B827D]">
                    During the Great Depression, lawyer Benjamin Roth kept a diary documenting his observations. These entries were published by his son in 2009. I&apos;m drawn to this concept for today&apos;s world, but as a collaborative effort capturing diverse perspectives. What fascinates me most about history is seeing how major events affected ordinary people and their thoughts—this project would leverage the internet to achieve exactly that.
                  </p>
                  
                  <details className="group mt-4">
                    <summary className="flex cursor-pointer items-center rounded-md bg-[#4B827D]/10 px-3 py-2 text-sm font-medium text-[#F7DAAC] hover:bg-[#4B827D]/20 transition-all">
                      <span>Brain Dump</span>
                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>

                    <div className="mt-3 px-3 py-2 bg-[#4B827D]/5 rounded-md border border-white/5">
                      <ul className="list-disc list-inside space-y-1 text-[#4B827D] text-sm">
                        <li>I really want a photo gallery. Just high quality photos of people doing everyday things with a simple caption. Maybe some iconic photos too</li>
                        <li>Maybe have prompts for people (e.g., What was different for you as a child compared to children now?, Where do you think the world will be in 10 years?, What tv show or movie has had an impact on you recently?)</li>
                        <li>Unsure of whether to review submissions or not. On the one hand, I don&apos;t want the platform to get too noisy, but also poor entries can also capture the character and attitudes of people, which is the intention of the platform</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            
            {/* Idea Card 2 */}
            <div className="bg-black/70 rounded-lg p-6 border border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#EEA139]/20 text-[#EEA139]">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#EEA139] mb-2">Virtual waiting line widget for online service businesses</h3>
                  <p className="text-[#4B827D]">
                    A while ago I walked past a popular restaurant that had an exceptionally long wait line. This immediately made me want to eat there. It also got me thinking about how to apply this to online businesses. So I had the idea of a virtual waiting line widget that could be embedded on a business&apos;s website.
                  </p>
                  
                  <details className="group mt-4">
                    <summary className="flex cursor-pointer items-center rounded-md bg-[#4B827D]/10 px-3 py-2 text-sm font-medium text-[#F7DAAC] hover:bg-[#4B827D]/20 transition-all">
                      <span>Brain Dump</span>
                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>

                    <div className="mt-3 px-3 py-2 bg-[#4B827D]/5 rounded-md border border-white/5">
                      <ul className="list-disc list-inside space-y-1 text-[#4B827D] text-sm">
                        <li>Even having customers consent to being shown in the waiting line would be great, especially if they&apos;re well known</li>
                        <li>Not sure if it should be a pop-up widget or a banner at the top of the page (might even be good to offer this as an option)</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            
            {/* Idea Card 3 */}
            <div className="bg-black/70 rounded-lg p-6 border border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#EEA139]/20 text-[#EEA139]">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#EEA139] mb-2">The calendar app I&apos;ve been waiting for</h3>
                  <p className="text-[#4B827D]">
                    I&apos;ve tried an infiinite number of calendar and todo apps over the years. If found, with the way I use my calendar, I&apos;m yet to find an app that integrates events and tasks naturally enough. I&apos;d love to build this for myself one day.
                  </p>
                  
                  <details className="group mt-4">
                    <summary className="flex cursor-pointer items-center rounded-md bg-[#4B827D]/10 px-3 py-2 text-sm font-medium text-[#F7DAAC] hover:bg-[#4B827D]/20 transition-all">
                      <span>Brain Dump</span>
                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>

                    <div className="mt-3 px-3 py-2 bg-[#4B827D]/5 rounded-md border border-white/5">
                      <ul className="list-disc list-inside space-y-1 text-[#4B827D] text-sm">
                        <li>A calendar that has more task functionality built natively. Like easily have an event with presets like type (eg quick task) and a checkbox </li>
                        <li>Have logic and automation, like if a task event is checked off, then move all subsequent batched tasks forwards. Or if a task goes unticked and the time runs out, extend it or push it back. </li>
                        <li>Plus I&apos;d remove any other quirks in calendars that are annoying. </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            
            {/* Idea Card 4 - Empty Template */}
            <div className="bg-black/70 rounded-lg p-6 border border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#EEA139]/20 text-[#EEA139]">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#EEA139] mb-2">NotGitHub.io</h3>
                  <p className="text-[#4B827D]">
                    I&apos;ve been a huge Notion user for years and one of the most exciting things they&apos;ve built out recently is their formulas. You can basically build super complex workflows using the formulas 2.0 language. But for power users and Notion consultants, I think it would be useful to have a github-like tool to manage these formulas, such as tracking changes and storing reusable snippets.
                  </p>
                  
                  <details className="group mt-4">
                    <summary className="flex cursor-pointer items-center rounded-md bg-[#4B827D]/10 px-3 py-2 text-sm font-medium text-[#F7DAAC] hover:bg-[#4B827D]/20 transition-all">
                      <span>Brain Dump</span>
                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>

                    <div className="mt-3 px-3 py-2 bg-[#4B827D]/5 rounded-md border border-white/5">
                      <ul className="list-disc list-inside space-y-1 text-[#4B827D] text-sm">
                        <li>Making it collaborative with teams would be very useful</li>
                        <li>Adding a social component would be potentially the coolest aspect. Like Dribbble, where you can share crazy formulas and follow other users</li>
                        <li>Even having a co-pilot that can help write formulas (although Notion will probably have this natively at some point)</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 