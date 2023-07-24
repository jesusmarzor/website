"use client"
import { createContext, useContext } from "react";
import useProjects from "hooks/useProjects";
import { Project } from "utils/interfaces";

interface props {
    children: JSX.Element
}

const projectsContext = createContext<any>(null);

export const ProjectsProvider: React.FC<props> = ({children}) => {
    const projects: Project[] = useProjects()
    return <projectsContext.Provider value={projects}>{children}</projectsContext.Provider>
}

export const ProjectsConsumer = () => {
    const context: Project[] = useContext(projectsContext)
    return context
}