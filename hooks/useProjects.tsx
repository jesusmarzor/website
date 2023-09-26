import { LoaderPageConsumer } from "contexts/LoaderPageContext"
import { useEffect, useState } from "react"
import { Project } from "utils/interfaces"
import { LoaderType } from "utils/enums"
import supabase from "utils/supabase"
import { useTranslation } from "react-i18next";
import { languages } from "utils/constants";

const useProjects = () => {
    const { i18n } = useTranslation()
    const [projects, setProjects] = useState<Project[]>([])
    const {isLoadingTypeShowed, hideLoader} = LoaderPageConsumer()
    const languagesCode = languages.map( lng => lng.code)
    useEffect(() => {
        supabase
        .from('Projects')
        .select()
        .eq("lang", localStorage.getItem("lang") ?? languagesCode[0])
        .order("created_at", {ascending: false})
        .then( res => {
            setProjects(res.data ?? [])
            isLoadingTypeShowed(LoaderType.projects) && hideLoader(LoaderType.projects)
        })

    }, [i18n.language])
    return projects
}

export default useProjects