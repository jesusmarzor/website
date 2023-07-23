"use client"
import Section from "components/ui/Section"
import useProjects from "hooks/useProjects"
import Project from "components/Projects/Project"
import { Spinner } from "components/ui/Spinner"
import { useTranslation } from "react-i18next"

export const Projects: React.FC = () => {
    const { t } = useTranslation()
    const projects = useProjects()
    return(
        <Section name="projects" title={t("common.projects")} titleClasses="text-center">
            {
                projects.length === 0 ?
                <Spinner classes="mx-auto my-10"/> :
                <ul className="grid grid-cols-autoFill gap-8 items-center py-20">
                    {
                        projects.map( (project) => {
                            return(
                                <Project
                                    key={project.id + project.title}
                                    {...project}
                                />
                            )
                        })
                    }
                </ul>
            }
        </Section>
    )
}