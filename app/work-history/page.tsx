import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const workHistory = [
  {
    id: 1,
    title: "Founder/ Aspiring Product Manager",
    company: "NextPromo.io",
    period: "November 2024 - Present",
    description:
      "Led the development of next-generation user interfaces, pushing the boundaries of what's possible in web technology.",
  },
  {
    id: 2,
    title: "Product Developer",
    company: "Tech Innovations",
    period: "2019 - 2022",
    description:
      "Developed and launched multiple successful products, focusing on user experience and technical excellence.",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Digital Solutions",
    period: "2017 - 2019",
    description: "Built robust backend systems and APIs that powered mission-critical applications.",
  },
]

export default function WorkHistory() {
  return (
    <div 
      className="container relative pt-24 min-h-screen bg-black"
      style={{
        backgroundImage: `url('/FR2.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="mx-auto max-w-3xl space-y-12 relative z-10">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10" />
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work History</h1>
          <p className="mt-4 text-muted-foreground">A journey through time, building the future one product at a time.</p>
        </div>
        <div className="relative pl-8 border-l border-white/10">
          {workHistory.map((job, index) => (
            <div key={job.id} className="relative mb-12 last:mb-0">
              <div
                className="absolute -left-[41px] h-5 w-5 rounded-full border-4 border-pink-500 bg-background"
                aria-hidden="true"
              />
              <Card className="relative overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Badge className="mb-2 bg-pink-500/10 text-pink-500 hover:bg-pink-500/20">{job.period}</Badge>
                  <h2 className="mb-1 text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                    {job.title} · {job.company}
                  </h2>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

