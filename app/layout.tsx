"use client"
import { Open_Sans } from 'next/font/google'
import ContentLayout from './contentLayout'
import "app/globals.css"
import "config/i18n"
import { LanguageModalProvider } from 'contexts/LanguageModalContext'
import { MenuMobileProvider } from 'contexts/MenuMobileContext'
import { ProjectsProvider } from 'contexts/ProjectsContext'
import { Loader } from 'components/LoaderPage'
import { LoaderPageProvider } from 'contexts/LoaderPageContext'
import { PostsProvider } from 'contexts/PostsContext'
const inter = Open_Sans({ subsets: ['latin'] })

export const runtime = 'edge';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className + " bg-light-default text-black-default dark:bg-black-default dark:text-white-default"}>
        <LoaderPageProvider>
          <>
          <Loader/>
          <LanguageModalProvider>
            <MenuMobileProvider>
              <PostsProvider>
                <ProjectsProvider>
                  <ContentLayout>
                    {children}
                  </ContentLayout>
                </ProjectsProvider>
              </PostsProvider>
            </MenuMobileProvider>
          </LanguageModalProvider>
          </>
        </LoaderPageProvider>
      </body>
    </html>
  )
}
