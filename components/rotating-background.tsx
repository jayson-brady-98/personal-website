import fs from 'fs'
import path from 'path'

function getRandomBackground() {
  const backgroundsDir = path.join(process.cwd(), 'public/backgrounds')
  const files = fs.readdirSync(backgroundsDir)
    .filter(file => file !== 'FR2.jpeg') // Exclude FR2.jpeg
    .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i)) // Only include image files

  const randomIndex = Math.floor(Math.random() * files.length)
  return `/backgrounds/${files[randomIndex]}`
}

export function RotatingBackground() {
  const backgroundImage = getRandomBackground()

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  )
} 