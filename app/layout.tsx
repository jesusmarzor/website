import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <header className="p-4">
            <nav className="flex h-24">
              <Link href="/">
                <Image
                  src="/img/logo.png"
                  priority
                  width={500}
                  height={500}
                  alt="Website logo"
                  className="object-contain w-64"
                />
              </Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
