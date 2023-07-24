import { AboutMe } from "components/AboutMe";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";
import { Introduce } from "components/Introduce";
import { Projects } from "components/Projects";

export default function Home() {
  return (
    <>
    <title>Portfolio - Jesusmarzor</title>
    <meta name="description" content=""/>
    <Introduce/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}
