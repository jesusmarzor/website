import Head from 'next/head'
import { Layout } from 'components/Layout';
import useTranslation from 'next-translate/useTranslation'
import { Element } from "react-scroll";
import { Introduction } from "components/Introduction"
import { SECTIONS } from 'enums/SECTIONS';
import { AboutMe } from 'components/AboutMe';

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
          <AboutMe/>
          <Element name={SECTIONS.PROJECTS} className="h-[500px] p-10 text-2xl font-bold bg-black-default">
            <h2 className="text-center">{t("projects")}</h2>
          </Element>
          <Element name={SECTIONS.CONTACT} className="h-[500px] p-10 text-2xl font-bold bg-black-default">
            <h2 className="text-center">{t("contact")}</h2>
          </Element>
        </section>
      </Layout>
    </>
  )
}