import { useEffect, useState } from "react"
import supabase from "utils/supabase"
import { LoaderType, Post } from "utils/interfaces";
import { LoaderPageConsumer } from "contexts/LoaderPageContext";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const {isLoadingTypeShowed, hideLoader} = LoaderPageConsumer()
    useEffect(() => {
        supabase
        .from('Posts')
        .select()
        .then( res => {
            let posts = res.data as Post[]
            posts?.sort((a, b) => b.date.getDate() - a.date.getDate())
            setPosts(posts ?? [])
            isLoadingTypeShowed(LoaderType.posts) && hideLoader(LoaderType.posts)
        })
    }, [])
    return posts
}

export default usePosts