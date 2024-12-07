import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '白马的博客',
  description: '分享游戏和生活',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen`}>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

