import { LoaderPageConsumer } from "contexts/LoaderPageContext"
import { useEffect, useState } from "react"
import { LoaderType, Project } from "utils/interfaces"
import supabase from "utils/supabase"
import { useTranslation } from "react-i18next";

const useProjects = () => {
    const { i18n } = useTranslation()
    const [projects, setProjects] = useState<Project[]>([])
    const {isLoadingTypeShowed, hideLoader} = LoaderPageConsumer()
    useEffect(() => {
        supabase
        .from('Projects')
        .select()
        .eq("lang", i18n.language)
        .order("created_at", {ascending: false})
        .then( res => {
            setProjects(res.data ?? [])
            isLoadingTypeShowed(LoaderType.projects) && hideLoader(LoaderType.projects)
        })

    }, [i18n.language])
    return projects
}

export default useProjects