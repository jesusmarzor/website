"use client"
import { Header } from 'components/Header'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import "config/i18n"

const inter = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto">
          <Header/>
          {children}
        </main>
      </body>
    </html>
  )
}
