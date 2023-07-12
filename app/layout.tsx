"use client"
import { Open_Sans } from 'next/font/google'
import ContentLayout from './contentLayout'
import "app/globals.css"
import "config/i18n"
import { LanguageModalProvider } from 'contexts/LanguageModalContext'
const inter = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black-default text-light-default"}>
        <LanguageModalProvider>
          <ContentLayout>
            {children}
          </ContentLayout>
        </LanguageModalProvider>
      </body>
    </html>
  )
}
