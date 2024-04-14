import { AboutMe } from "components/AboutMe";
import { BlogSection } from "components/BlogSection";
import { Contact } from "components/Contact";
import { Introduce } from "components/Introduce";
import { Projects } from "components/Projects";
import { authorName, textLogo } from "utils/constants";

export default function Home() {
  return (
    <>
    <title>{`Website - ${textLogo.name}${textLogo.lastName}`}</title>
    <meta name="description" content={`${authorName} (${textLogo.name}${textLogo.lastName})'s website, web and iOS developer. Here you will find his latest projects and articles developed with Swift or React.`}/>
    <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_SUPABASE_OG_PATH}home.jpg`}/>
    <meta property="og:url" content=""/>
    <meta property="og:title" content={`Website - ${textLogo.name}${textLogo.lastName}`}/>
    <meta property="og:description" content="Here you will find his latest projects and articles developed."/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content=""/>
    <meta name="twitter:title" content={`Website - ${textLogo.name}${textLogo.lastName}`}/>
    <meta property="twitter:description" content="Here you will find his latest projects and articles developed."/>
    <meta name="twitter:image" content={`https://${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_SUPABASE_OG_PATH}home.jpg`}/>
    <Introduce/>
    <AboutMe/>
    <Projects/>
    <BlogSection/>
    <Contact/>
    </>
  )
}
