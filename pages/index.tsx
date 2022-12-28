import Head from 'next/head'
import { Layout } from 'components/Layout'
import useTranslation from 'next-translate/useTranslation'
import { Element } from "react-scroll";
import { Introduction } from "components/Introduction"

export default function Home() {
  const { t } = useTranslation("common")
  return (
    <>
      <Head>
        <title>Website - Jesús Martín</title>
      </Head>
      <Layout>
        <section className="ml-72">
          <Introduction/>
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