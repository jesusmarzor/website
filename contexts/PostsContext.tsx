import { createContext, useContext } from "react";
import usePosts from "hooks/usePosts";
import { Post } from "utils/interfaces";

interface props {
    children: JSX.Element
}

const postsContext = createContext<any>(null);

export const PostsProvider: React.FC<props> = ({children}) => {
    const posts: Post[] = usePosts()
    return <postsContext.Provider value={posts}>{children}</postsContext.Provider>
}

export const PostsConsumer = () => {
    const context: Post[] = useContext(postsContext)
    return context
}