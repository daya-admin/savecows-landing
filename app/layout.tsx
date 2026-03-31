import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Save Cows | Gau Mata Seva | गौ माता सेवा',
  description: 'Donate to support abandoned cows at our Gaushala. Your donation feeds and shelters cows in need.',
  keywords: 'cow donation, gau seva, gaushala, cow shelter, donate, India',
  openGraph: {
    title: 'Save Cows | Gau Mata Seva',
    description: 'Your donation feeds and shelters abandoned cows at our Gaushala',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-warm-beige">
        {children}
      </body>
    </html>
  )
}
