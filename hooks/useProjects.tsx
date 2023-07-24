import { LoaderPageConsumer } from "contexts/LoaderPageContext"
import { useEffect, useState } from "react"
import { Project } from "utils/interfaces"
import supabase from "utils/supabase"
import { useTranslation } from "react-i18next";

const useProjects = () => {
    const { i18n } = useTranslation()
    const [projects, setProjects] = useState<Project[]>([])
    const { isShowed: loaderIsShowed, setIsShowed: setLoaderIsShowed} = LoaderPageConsumer()
    useEffect(() => {
        supabase
        .from('Projects')
        .select()
        .eq("lang", i18n.language)
        .then( res => {
            let projects = res.data as Project[]
            projects?.sort((a, b) => b.id - a.id)
            setProjects(projects ?? [])
            loaderIsShowed && setLoaderIsShowed(!loaderIsShowed)
        })

    }, [i18n.language])
    return projects
}

export default useProjects