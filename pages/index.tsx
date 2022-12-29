import Head from 'next/head'
import { Layout } from 'components/Layout';
import { Introduction } from "components/Introduction"
import { AboutMe } from 'components/AboutMe';
import { Projects } from 'components/Projects';
import { Contact } from 'components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Website - Jesús Martín</title>
      </Head>
      <Layout>
        <div className="ml-72">
          <Introduction/>
          <AboutMe/>
          <Projects/>
          <Contact/>
        </div>
      </Layout>
    </>
  )
}