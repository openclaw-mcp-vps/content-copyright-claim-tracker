import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClaimGuard – Monitor & Dispute False YouTube Copyright Claims',
  description: 'Automatically track YouTube copyright claims, analyze validity with audio fingerprinting, and generate legal dispute letters in seconds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="da2e5651-3e2b-4213-af06-6824982276ec"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
