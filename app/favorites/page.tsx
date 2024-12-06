import { redirect } from "next/navigation"

export default function Favorites() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgrounds/FR3.jpeg')" }}
    >
      {redirect("/favorites/quotes")}
    </div>
  )
}

