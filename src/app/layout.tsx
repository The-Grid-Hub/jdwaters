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
    shortcut: '/images/logo.png',
  },
  themeColor: '#0D2040',
  openGraph: {
    title: 'JD Waters Energy Limited | Integrated Oilfield Development & Energy Services',
    description:
      'JD Waters Energy Limited delivers technically sound, cost-efficient, and sustainable energy projects across the upstream and midstream value chain — from field development planning to production operations.',
    url: 'https://jdwaters.org',
    siteName: 'JD Waters Energy Limited',
    images: [
      {
        url: '/images/logo.png',
        width: 300,
        height: 180,
        alt: 'JD Waters Energy Limited',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'JD Waters Energy Limited',
    description:
      'Integrated oilfield development and energy services — field development planning, EPC, drilling, production operations, and project management.',
    images: ['/images/logo.png'],
  },
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
