"use client"
import { BackButton } from "components/ui/BackButton"
import Card from "components/ui/Card"
import { ProjectsConsumer } from "contexts/ProjectsContext"
import useSearch from "hooks/useSearch"
import { useTranslation } from "react-i18next"
import { Search } from "components/ui/Search"
import useWindowTop from "hooks/useWindowTop"
import { Project } from "utils/interfaces"

const Projects = () => {
    useWindowTop()
    const { t } = useTranslation()
    const allProjects = ProjectsConsumer()
    const {list, didTapSearch, text, setText} = useSearch({allData: allProjects})
    
    return (
        <>
        <title>Projects - Jesusmarzor</title>
        <meta name="description" content=""/>
        <section className="max-w-7xl mx-auto overflow-hidden pt-28 pb-10 px-5 md:px-10 w-full">
            <header className="flex justify-between items-center gap-2">
                <BackButton/>
                <Search onSubmit={didTapSearch} value={text} setText={setText} placeholder={t("common.search")}/>
            </header>
            <h2 className="text-5xl font-bold text-center mt-10">{t("common.projects")}</h2>
            {
                list.length === 0 ?
                <p className="text-center mt-20">{t("projects.notFound")}</p> :
                <ul className="grid grid-cols-autoFill gap-8 items-center w-full pt-20 px-5 md:px-0">
                    {
                    (list as Project[]).map( ({id, image, title, description, url}) => <Card key={id + title} image={image} title={title} description={description} to={url} />)
                    }
                </ul>
            }
        </section>
        </>
    )
}

export default Projects