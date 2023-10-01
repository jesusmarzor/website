"use client"
import Section from "components/ui/Section"
import { useTranslation } from "react-i18next"
import { ProjectsConsumer } from "contexts/ProjectsContext"
import { maxNumCardsInHomeSections } from "utils/constants"
import Card from "components/ui/Card"
import Button from "components/ui/Button"
import { ButtonType } from "utils/enums"

export const Projects: React.FC = () => {
    const { t } = useTranslation()
    const projects = ProjectsConsumer().slice(0, maxNumCardsInHomeSections)
    return(
        projects.length !== 0 &&
        <Section name="projects" title={t("common.projects")} titleClasses="text-center" sectionClasses="flex flex-col justify-center items-center gap-10">
            <ul className="grid grid-cols-autoFill gap-8 items-center w-full pt-10">
                {
                    projects?.map( ({id, image, title, description, tags, url, color}) => <Card key={id + title} id={id} image={image} title={title} description={description} to={url} tags={tags} color={color}/>)
                }
            </ul>
            <Button classes="" type={ButtonType.navigation} to="/projects">{t("common.seeAll")}</Button>
        </Section>
    )
}