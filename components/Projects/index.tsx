"use client"
import Section from "components/ui/Section"
import { useTranslation } from "react-i18next"
import { ProjectsConsumer } from "contexts/ProjectsContext"
import { maxNumCardsInHomeSections } from "utils/constants"
import Card from "components/ui/Card"

export const Projects: React.FC = () => {
    const { t } = useTranslation()
    const projects = ProjectsConsumer().slice(0, maxNumCardsInHomeSections)
    return(
        projects.length !== 0 &&
        <Section name="projects" title={t("common.projects")} titleClasses="text-center">
            <ul className="grid grid-cols-autoFill gap-8 items-center pt-20 pb-5">
                {
                    projects?.map( ({id, image, title, description, url}) => <Card key={id + title} image={image} title={title} description={description} to={url} />)
                }
            </ul>
        </Section>
    )
}