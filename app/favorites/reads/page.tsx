import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const books = [
  {
    id: 1,
    title: "Snow Crash",
    author: "Neal Stephenson",
    genre: "Science Fiction",
    description: "A mind-bending exploration of virtual reality and cyberpunk culture.",
  },
  {
    id: 2,
    title: "Neuromancer",
    author: "William Gibson",
    genre: "Cyberpunk",
    description: "The defining novel of the cyberpunk genre, exploring artificial intelligence and corporate power.",
  },
  {
    id: 3,
    title: "Ready Player One",
    author: "Ernest Cline",
    genre: "Science Fiction",
    description: "A thrilling adventure through a virtual world filled with 80s pop culture references.",
  },
]

export default function Reads() {
  return (
    <div className="grid gap-6 py-8">
      {books.map((book) => (
        <Card key={book.id} className="border-white/10 bg-black/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="space-y-2">
              <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20">{book.genre}</Badge>
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p className="text-sm text-muted-foreground">by {book.author}</p>
              <p className="text-muted-foreground">{book.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

