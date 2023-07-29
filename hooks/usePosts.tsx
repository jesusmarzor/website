import { useEffect, useState } from "react"
import supabase from "utils/supabase"
import { LoaderType, Post } from "utils/interfaces";
import { LoaderPageConsumer } from "contexts/LoaderPageContext";
import useDate from "./useDate";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const {isLoadingTypeShowed, hideLoader} = LoaderPageConsumer()
    const {isShowedPost} = useDate()
    useEffect(() => {
        supabase
        .from('Posts')
        .select()
        .order("date", {ascending: false})
        .then( res => {
            let posts = res.data?.filter( ({date}) => isShowedPost(date)) as Post[]
            setPosts(posts ?? [])
            isLoadingTypeShowed(LoaderType.posts) && hideLoader(LoaderType.posts)
        })
    }, [])
    return posts
}

export default usePosts