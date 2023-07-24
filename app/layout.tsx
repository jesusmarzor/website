"use client"
import { Open_Sans } from 'next/font/google'
import ContentLayout from './contentLayout'
import "app/globals.css"
import "config/i18n"
import { LanguageModalProvider } from 'contexts/LanguageModalContext'
import useThemeIcon from 'hooks/useThemeIcon'
import { MenuMobileProvider } from 'contexts/MenuMobileContext'
import { ProjectsProvider } from 'contexts/Projects'
const inter = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isDark } = useThemeIcon()

  return (
    <html lang="en" className={`${isDark() && 'dark'}`}>
      <body className={inter.className + " bg-light-default text-black-default dark:bg-black-default dark:text-white-default"}>
        <LanguageModalProvider>
          <MenuMobileProvider>
            <ProjectsProvider>
              <ContentLayout>
                {children}
              </ContentLayout>
            </ProjectsProvider>
          </MenuMobileProvider>
        </LanguageModalProvider>
      </body>
    </html>
  )
}
