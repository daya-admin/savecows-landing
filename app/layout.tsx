import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'

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
      <body className="min-h-screen bg-warm-beige">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
