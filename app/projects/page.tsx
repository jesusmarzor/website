"use client"
import { BackButton } from "components/ui/BackButton"
import Card from "components/ui/Card"
import { ProjectsConsumer } from "contexts/ProjectsContext"
import useSearch from "hooks/useSearch"
import { useTranslation } from "react-i18next"
import { Search } from "components/ui/Search"
import { Project } from "utils/interfaces"
import { authorName, textLogo } from "utils/constants"
import useWindowTop from "hooks/useWindowTop"

const Projects = () => {
    useWindowTop()
    const { t } = useTranslation()
    const allProjects = ProjectsConsumer()
    const {list, didTapSearch, text, setText} = useSearch({allData: allProjects})
    
    return (
        <>
        <title>{`Projects - ${textLogo.name}${textLogo.lastName}`}</title>
        <meta name="description" content={`Projects created by ${authorName} (${textLogo.name}${textLogo.lastName}), web and iOS developer.`}/>
        <section className="max-w-7xl mx-auto overflow-hidden pt-28 pb-10 px-5 md:px-10 w-full">
            <header className="flex justify-between items-center gap-2">
                <BackButton/>
                <Search onSubmit={didTapSearch} value={text} setText={setText} placeholder={t("common.search")}/>
            </header>
            <h2 className="text-5xl font-bold text-center mt-10">{t("common.projects")}</h2>
            {
                list.length === 0 ?
                <p className="text-center mt-20">{t("projects.notFound")}</p> :
                <ul className="w-full grid grid-cols-autoFill gap-8 items-center pt-20 px-5 md:px-0">
                    {
                    (list as Project[]).map( ({id, image, title, tags, description, url, color}, index) => <Card key={id + title} id={id} image={image} title={title} description={description} to={url} tags={tags} color={color} classes="animate-fadeUpCustom opacity-0" styles={{ '--animate-delay': `${index * 50}ms` } as any}/>)
                    }
                </ul>
            }
        </section>
        </>
    )
}

export default Projects