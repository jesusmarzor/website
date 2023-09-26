import { useEffect, useState } from "react"
import supabase from "utils/supabase"
import { Post } from "utils/interfaces";
import { LoaderPageConsumer } from "contexts/LoaderPageContext";
import useDate from "./useDate";
import { useTranslation } from "react-i18next";
import { languages } from "utils/constants";
import { LoaderType } from "utils/enums";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const {isLoadingTypeShowed, hideLoader} = LoaderPageConsumer()
    const {isShowedPost} = useDate()
    const { i18n } = useTranslation()
    const languagesCode = languages.map( lng => lng.code)
    useEffect(() => {
        supabase
        .from('Posts')
        .select()
        .eq("lang", localStorage.getItem("lang") ?? languagesCode[0])
        .order("date", {ascending: false})
        .then( res => {
            let posts = res.data?.filter( ({date}) => isShowedPost(date)) as Post[]
            setPosts(posts ?? [])
            isLoadingTypeShowed(LoaderType.posts) && hideLoader(LoaderType.posts)
        })
    }, [i18n.language])
    return posts
}

export default usePosts