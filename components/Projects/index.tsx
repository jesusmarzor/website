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
            <ul className="w-full grid grid-cols-autoFill gap-8 items-center pt-10">
                {
                    projects?.map( ({id, image, title, description, tags, url, color}, index) => <Card key={id + title} id={id} image={image} title={title} description={description} to={url} tags={tags} color={color} classes="animate-fadeLeftCustom opacity-0" styles={{ '--animate-delay': `${index * 50}ms` } as any}/>)
                }
            </ul>
            <Button type={ButtonType.navigation} to="/projects">{t("common.seeAll")}</Button>
        </Section>
    )
}