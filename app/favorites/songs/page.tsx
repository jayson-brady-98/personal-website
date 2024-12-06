import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const songs = [
  {
    id: 1,
    title: "Midnight City",
    artist: "M83",
    genre: "Synthwave",
    year: "2011",
  },
  {
    id: 2,
    title: "Tech Noir",
    artist: "Gunship",
    genre: "Synthwave",
    year: "2015",
  },
  {
    id: 3,
    title: "Resonance",
    artist: "Home",
    genre: "Electronic",
    year: "2014",
  },
]

export default function Songs() {
  return (
    <div className="grid gap-6 py-8">
      {songs.map((song) => (
        <Card key={song.id} className="border-white/10 bg-black/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="space-y-2">
              <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20">{song.genre}</Badge>
              <h2 className="text-xl font-bold">{song.title}</h2>
              <p className="text-sm text-muted-foreground">by {song.artist}</p>
              <p className="text-muted-foreground">{song.year}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

