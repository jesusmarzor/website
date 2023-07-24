import { LoaderPageConsumer } from "contexts/LoaderPageContext"
import { useEffect, useState } from "react"
import { Project } from "utils/interfaces"
import supabase from "utils/supabase"

const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const { setIsShowed: setLoaderIsShowed} = LoaderPageConsumer()
    useEffect(() => {
        supabase
        .from('Projects')
        .select()
        .then( res => {
            let projects = res.data as Project[]
            projects?.sort((a, b) => b.id - a.id)
            setProjects(projects ?? [])
            setLoaderIsShowed(false)
        })

    }, [])
    return projects
}

export default useProjects