import './globals.css'
import type { Metadata } from 'next'
import { RotatingBackground } from '@/components/rotating-background'
import { Navigation } from '@/components/navigation'

export const metadata: Metadata = {
  title: 'Your Site Name',
  description: 'Your site description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RotatingBackground />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

