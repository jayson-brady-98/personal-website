"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"

const workHistory = [
  {
    id: 1,
    title: "Envious Child",
    company: "My childhood bedroom/ Primary school",
    period: "Approx. 2005",
    description:
      "Created a cardboard Nintendo DS when I was 7 because I was the only one without one. This was when I first developed my interest in building things to solve problems.",
  },
  {
    id: 2,
    title: "Musician/ Angsty Teen",
    company: "My childhood bedroom",
    period: "2011 - 2016",
    description:
      "Spent 3+ hours every afternoon writing hard rocksongs on my guitar and recording them in GarageBand. This was when my obsession for creation and tendency towards iteration became a big part of me.",
  },
  {
    id: 3,
    title: "Lawnmowing Savant, Paperboy, & Dish Pig",
    company: "Various",
    period: "2011 - 2015",
    description: "Had several classic jobs that all taught me how to eat shit and work hard.",
  },
  {
    id: 4,
    title: "Swim Coach",
    company: "Nepean Aquatic Centre",
    period: "2015 - 2017",
    description:
      "Taught young kids how to not drown. Here I learned patience, stakeholder management, and how to communicate clearly.",
  },
  {
    id: 5,
    title: "Support Worker",
    company: "LEAP Social Services, ABI Services",
    period: "2017 - 2019",
    description:
      "Had a couple of jobs working with kids in the social services system as well as adults living with disabilities. I refined my soft skills during these years, especially communication skills and empathy.",
  },
  {
    id: 6,
    title: "Research Assistant/ Uni Student",
    company: "University of Queensland",
    period: "2020 - 2022",
    description:
      "While I was doing my psychology degree, I was a research assistant for Prof. Bill von Hippel and Prof. Roy Baumeister. This, along with thesis year, taught me a lot about research, data analysis, and project management. This was also my first exposure code (R).",
  },
  {
    id: 7,
    title: "Wannabe entrepreneur",
    company: "Reader's Recap",
    period: "2022",
    description: {
      __html: "Developed a concept for an app to help dementia patients read books by using AI to provide summaries of a book&apos;s storyline to the current page. I got pretty far with it - did patent research and business planning, but then found out someone already held a patent for the idea. Even though the patent was close to expiring, I was apprehensive about finding a technical cofounder and seeking fundings, so I shelved the idea. (Readwise <a href='https://x.com/homsiT/status/1866968568350515697' class='text-[#4B827D] hover:text-[#C94128] transition-colors underline'>built this feature</a> into their product only recently). This was when I started to dive deeper into using technology to solve real-world problems."
    },
  },    
  {
    id: 8,
    title: "Founder",
    company: "Timeful",
    period: "2022 - 2023",
    description:
      "Started a small consulting business to help entrepreneurs streamline their workflows with custom-built Notion workspaces, automations, and LLMs. Over the year, I refined my problem-solving abilities, built and sold my first low-code digital products, and became well aquainted with the interaction of product goals and business goals.",
  },
  {
    id: 9,
    title: "Operations Coordinator",
    company: "Loadshift",
    period: "2023 - 2024",
    description:
      "I took this job for financial reasons after I stopped working on Timeful. It was mostly a user support/operations role, but I got to work on some product stuff because I had a good manager. I learned a lot about office politics and how large companies work, as well as the type of work I excel at (project-based and iterative).",
  },
  {
    id: 10,
    title: "Product Consultant & Customer Support",
    company: "Antiwork.com (Gumroad, Helper.ai)",
    period: "2024",
    description:
      "Started in customer support at Gumroad and Helper.ai, but moved into product work after a few months. I did everything from feature planning to UX writing and mockups in Figma to deploying code. Most exciting was getting to shape Helper.ai's UX - pretty much all my ideas got shipped. This was my first time working with a production codebase, where I learned to collaborate with engineers and designers, write code (using Cursor), and ship features. I also learned how to get stakeholders to buy into my ideas.",
  },
  {
    id: 11,
    title: "Founder",
    company: "NextPromo.io",
    period: "Current",
    description:
      "NextPromo.io predicts when consumers' favourite brands will have a sale so they can save money. I currently have a working prototype live, but I'm currently working on improving the data quality to make the product more valuable.",
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#EEA139]">
                Work History
              </h1>
              <p className="text-[#F7DAAC] text-sm sm:text-base md:text-lg italic font-light tracking-wide mx-auto">
                This is a list of my relevant work and creative endeavours, which has culminated to the product-obsessed egg head I am now
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
                  <div className={`flex w-full md:w-2/3 ${index % 2 === 0 ? 'md:ml-auto md:pr-24' : 'md:pl-24'} 
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

