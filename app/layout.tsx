"use client"
import { Open_Sans } from 'next/font/google'
import ContentLayout from './contentLayout'
import "app/globals.css"
import "config/i18n"
import { LanguageModalProvider } from 'contexts/LanguageModalContext'
import useThemeIcon from 'hooks/useThemeIcon'
const inter = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isDark } = useThemeIcon()

  return (
    <html lang="en" className={`${isDark() && 'dark'}`}>
      <body className={inter.className + " bg-light-default text-black-default dark:bg-black-default dark:text-light-default"}>
        <LanguageModalProvider>
          <ContentLayout>
            {children}
          </ContentLayout>
        </LanguageModalProvider>
      </body>
    </html>
  )
}
