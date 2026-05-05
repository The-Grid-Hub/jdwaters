import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JD Waters Energy Limited | Integrated Oilfield Development & Energy Services',
  description:
    'JD Waters Energy Limited delivers technically sound, cost-efficient, and sustainable energy projects across the upstream and midstream value chain — from field development planning to production operations.',
  keywords: [
    'oilfield development',
    'energy services',
    'EPC',
    'drilling',
    'Nigeria',
    'JD Waters Energy',
    'field development planning',
    'production operations',
  ],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  themeColor: '#0D2040',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
