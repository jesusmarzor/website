import { AboutMe } from "components/AboutMe";
import { BlogSection } from "components/BlogSection";
import { Contact } from "components/Contact";
import { Introduce } from "components/Introduce";
import { Projects } from "components/Projects";
import { authorName, textLogo } from "utils/constants";

export default function Home() {
  return (
    <>
    <title>{`Portfolio - ${textLogo.name}${textLogo.lastName}`}</title>
    <meta name="description" content={`${authorName} (${textLogo.name}${textLogo.lastName})'s website, web and iOS developer. Here you will find his latest projects and articles developed with Swift or React.`}/>
    <Introduce/>
    <AboutMe/>
    <Projects/>
    <BlogSection/>
    <Contact/>
    </>
  )
}
