"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"

const workHistory = [
  {
    id: 1,
    title: "Envious child",
    company: "My childhood bedroom/ Primary school",
    period: "Approx. 2005",
    description:
      "Created a cardboard Nintendo DS, including insertable game cartridges, since I couldn't afford to buy one as a 6 year-old. This was when I first developed my interest in building things to solve problems.",
  },
  {
    id: 2,
    title: "Musician/ Angsty teenager",
    company: "My childhood bedroom",
    period: "2011 - 2016",
    description:
      "Spent 3+ hours every afternoon writing hard rocksongs on my guitar and recording them in GarageBand. This was when my obsession for creation and tendency towards iteration became a big part of me.",
  },
  {
    id: 3,
    title: "Lawnmowing Savant, Paperboy, & dish pig",
    company: "Various",
    period: "2011 - 2015",
    description: "Had several classic jobs that all taught me how to eat shit and work hard.",
  },
  {
    id: 4,
    title: "Swimming Instructor",
    company: "Nepean Aquatic Centre",
    period: "2015 - 2017",
    description:
      "Taught young kids how to not drown. This was also where I met the love of my life.",
  },
  {
    id: 5,
    title: "Support Worker",
    company: "LEAP Social Services, ABI Services",
    period: "2017 - 2019",
    description:
      "Had a couple of jobs working with kids in the social services system as well as adults living with disabilities. This was when I learned just how hard some people have it. I also refined my soft skills during these years.",
  },
  {
    id: 6,
    title: "Research Assistant/ Uni Student",
    company: "University of Queensland",
    period: "2020 - 2022",
    description:
      "While I was doing my degree in psychology, I was a research assistant for Prof. Bill von Hippel and Prof. Roy Baumeister. This, along with thesis year, taught me a lot about research, data analysis, and project management. This was also my first exposure to coding.",
  },
  {
    id: 7,
    title: "Wannabe entrepreneur",
    company: "Reader's Recap",
    period: "2022",
    description: {
      __html: "Developed a concept for an app helping dementia patients track their reading progress with automated book summaries. Advanced to patent research and business planning stages, but discovered an existing patent. Though the patent was near expiration, challenges in finding a technical co-founder and concerns about VC funding led to shelving the project (though I still have all my notes). But this was when I started to dive deeper into using technology to solve read-world problems. Funnilty enough, Readwise <a href='https://x.com/homsiT/status/1866968568350515697' class='text-[#4B827D] hover:text-[#C94128] transition-colors underline'>built this feature</a> into their product only recently."
    },
  },    
  {
    id: 8,
    title: "Founder",
    company: "Timeful",
    period: "2022 - 2023",
    description:
      "Started a small consulting business designed to help entrepreneurs streamline their workflows with custom-build Notion workspaces and automations. As anyone who had tried to start a business, I learned too much to list (I have a full essay about this here). But during this time I refined my problem-solving abilities, built my first digital products based on market research, and became well aquainted with the interaction of product goals and business goals.",
  },
  {
    id: 9,
    title: "Junior Account Coordinator",
    company: "Loadshift",
    period: "2023 - 2024",
    description:
      "I took this job for financial reasons after I stopped working on Timeful. It was mostly a sales/operations role, but I got to work on some product stuff because I had a good manager. I learned a lot about office politics and that I do my best work when I get to work on projects (rather than reactive daily tasks).",
  },
  {
    id: 10,
    title: "A bit of everything",
    company: "Antiwork.com (fka Gumroad)",
    period: "2024",
    description:
      "Started in customer support at Gumroad and Helper.ai, but quickly moved into product work. I got to do everything from feature planning to UX writing and mockups in Figma. Most exciting was getting to shape Helper.ai's user experience - pretty much all my ideas made it into the final product. This was my first time working with a production codebase, where I learned to collaborate with engineers, write code (with AI's help), and ship features. I also learned how to get stakeholders to buy into my ideas.",
  },
  {
    id: 11,
    title: "Founder",
    company: "NextPromo.io",
    period: "Current",
    description:
      "Getting product management experience is hard, so I'm creating my own experience. NextPromo.io is an app that enables consumers to see projections for when their favourite brands will likely have a sale so they can save money. Initially I was going to build it for my partner since it solves a problem specific to her, but after fleshing out the ideas and thinking about how to monetise the site, I thought I'd keep building and see where it goes while I apply for product jobs.",
  },
]

export default function WorkHistory() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 5000], [0, -300])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <main className="flex-grow relative">
          <div className="relative z-10">
            {/* Static content without animations */}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex-grow relative">
        {isMounted && (
          <motion.div 
            className="fixed inset-0 z-0"
            initial={{ opacity: 1 }}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/backgrounds/FR2.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              y: backgroundY,
              top: '-100px',
              bottom: '-100px',
              height: 'calc(100% + 400px)',
            }}
          />
        )}

        <div className="relative z-10">
          <div className="container mx-auto max-w-5xl space-y-12 pt-24 pb-24">
            <div className="text-center space-y-4 relative">
              <div className="inline-block px-3 sm:px-8 py-3 sm:py-4 bg-black/60 backdrop-blur-sm border-4 border-[#EEA139] rounded-lg shadow-[0_0_20px_rgba(238,161,57,0.3)] relative">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl 
                  text-transparent bg-clip-text bg-gradient-to-b from-[#EEA139] to-[#C94128]
                  [text-shadow:_2px_2px_15px_rgb(238_161_57_/_60%)]
                  animate-pulse">
                  Work History
                </h1>
                <div className="absolute inset-0 border-[#EEA139]/20 border-2 rounded-lg transform rotate-1"></div>
                <div className="absolute inset-0 border-[#EEA139]/20 border-2 rounded-lg transform -rotate-1"></div>
              </div>
              <p className="text-[#4B827D] text-sm sm:text-base md:text-lg italic font-light tracking-wide mx-auto backdrop-blur-sm bg-black/30 px-3 sm:px-4 py-2 rounded-lg relative
                max-w-[90%] sm:max-w-2xl">
                Everything I&apos;ve done in terms of work or creation, all of which has culminated to the product-building egg head I am now
              </p>
            </div>
            <div className="relative">
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-[#4B827D]/30" 
                style={{
                  height: 'calc(100% - 2.5rem)',
                  top: '0'
                }}
              />
              {workHistory.map((job, index) => (
                <div key={job.id} className="relative mb-12 last:mb-0">
                  <div className={`flex w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pr-24' : 'md:pl-24'} 
                    px-8 md:px-0
                    ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                    <Card className="w-full relative overflow-hidden border-[#4B827D]/30 bg-black/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <Badge className="mb-2 bg-[#EEA139]/10 text-[#EEA139] hover:bg-[#EEA139]/20">{job.period}</Badge>
                        <h2 className="mb-1 text-xl tracking-tight text-[#C94128]">
                          <span className="font-bold">Role:</span> {job.title}
                        </h2>
                        <h2 className="mb-1 text-xl tracking-tight text-[#C94128]">
                          <span className="font-bold">Company:</span> {job.company}
                        </h2>
                        {typeof job.description === 'string' ? (
                          <p className="text-sm text-[#4B827D]">{job.description}</p>
                        ) : (
                          <p className="text-sm text-[#4B827D]" dangerouslySetInnerHTML={job.description} />
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  <div
                    className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-4 border-[#C94128] bg-[#F7DAAC] z-10"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

