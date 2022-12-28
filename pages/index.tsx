import Head from 'next/head'
import Image from 'next/image'
import { Layout } from 'components/Layout'
import { Technology } from 'components/Technology'
import { ITEMS_TECHNOLOGIES } from 'utils/CONSTANTS'
import useTranslation from 'next-translate/useTranslation'
import { Element } from "react-scroll";

export default function Home() {
  const { t } = useTranslation("common")
  return (
    <>
      <Head>
        <title>Website - Jesús Martín</title>
      </Head>
      <Layout>
        <section className="ml-72">
          <Element name="home" className="min-h-screen p-10 text-2xl font-bold">
            <h2>Jesús Martín</h2>
          </Element>
          <Element name="about-me" className="h-[500px] p-10 text-2xl font-bold bg-black-default">
            <h2 className="text-center">{t("about-me")}</h2>
          </Element>
          <Element name="projects" className="h-[500px] p-10 text-2xl font-bold bg-black-default">
            <h2 className="text-center">{t("projects")}</h2>
          </Element>
          <Element name="blog" className="h-[500px] p-10 text-2xl font-bold bg-black-default">
            <h2 className="text-center">{t("blog")}</h2>
          </Element>
          <Element name="contact" className="h-[500px] p-10 text-2xl font-bold bg-black-default">
            <h2 className="text-center">{t("contact")}</h2>
          </Element>
        </section>
      </Layout>
    </>
  )
}