import { AboutMe } from "components/AboutMe";
import { BlogSection } from "components/BlogSection";
import { Contact } from "components/Contact";
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
    <BlogSection/>
    <Contact/>
    </>
  )
}
