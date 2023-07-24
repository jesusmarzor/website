"use client"
import Section from "components/ui/Section"
import Project from "components/Projects/Project"
import { useTranslation } from "react-i18next"
import { ProjectsConsumer } from "contexts/ProjectsContext"

export const Projects: React.FC = () => {
    const { t } = useTranslation()
    const projects = ProjectsConsumer()
    return(
        projects.length !== 0 &&
        <Section name="projects" title={t("common.projects")} titleClasses="text-center">
            <ul className="grid grid-cols-autoFill gap-8 items-center pt-20 pb-5">
                {
                    projects?.map( (project) => {
                        return(
                            <Project
                                key={project.id + project.title}
                                {...project}
                            />
                        )
                    })
                }
            </ul>
        </Section>
    )
}