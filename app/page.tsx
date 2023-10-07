import { AboutMe } from "components/AboutMe";
import { BlogSection } from "components/BlogSection";
import { Contact } from "components/Contact";
import { Introduce } from "components/Introduce";
import { Projects } from "components/Projects";

export default function Home() {
  return (
    <>
    <title>Portfolio - Jesusmarzor</title>
    <meta name="description" content="Jesús Martín Zorrilla (jesusmarzor)'s website, web and iOS developer. Here you will find his latest projects and articles developed with Swift or React."/>
    <Introduce/>
    <AboutMe/>
    <Projects/>
    <BlogSection/>
    <Contact/>
    </>
  )
}
