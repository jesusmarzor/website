import { useEffect, useState } from "react"
import supabase from "utils/supabase"
import { LoaderType, Post } from "utils/interfaces";
import { LoaderPageConsumer } from "contexts/LoaderPageContext";
import useDate from "./useDate";
import { useTranslation } from "react-i18next";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const {isLoadingTypeShowed, hideLoader} = LoaderPageConsumer()
    const {isShowedPost} = useDate()
    const { i18n } = useTranslation()
    useEffect(() => {
        supabase
        .from('Posts')
        .select()
        .eq("lang", i18n.language)
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