import './globals.css'
import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'jaysonbrady.com',
  description: 'A personal website based on a retro-futuristic theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  )
}

