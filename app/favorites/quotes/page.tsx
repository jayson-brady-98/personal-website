import { Card, CardContent } from "@/components/ui/card"

const quotes = [
  {
    id: 1,
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    id: 2,
    text: "Innovation is the ability to see change as an opportunity - not a threat.",
    author: "Steve Jobs",
  },
  {
    id: 3,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
]

export default function Quotes() {
  return (
    <div className="grid gap-6 py-8">
      {quotes.map((quote) => (
        <Card key={quote.id} className="border-white/10 bg-black/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <blockquote className="space-y-2">
              <p className="text-lg">&ldquo;{quote.text}&rdquo;</p>
              <footer className="text-sm text-muted-foreground">— {quote.author}</footer>
            </blockquote>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

