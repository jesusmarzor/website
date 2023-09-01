"use client"
import { PostsConsumer } from "contexts/PostsContext"
import { BackButton } from "components/ui/BackButton"
import md from "markdown-it"
import useWindowTop from "hooks/useWindowTop"

interface Params {
    slug: string
}

interface props {
    params: Params
}

const Post: React.FunctionComponent<props> = ({params})  => {
    useWindowTop()
    const post = PostsConsumer().filter( ({slug}) => slug === params.slug)[0]
    return (
        <>
        <title>Blog - Jesusmarzor</title>
        <section className="max-w-7xl mx-auto overflow-hidden pt-32 pb-10 px-5 md:px-10 w-full">
            <BackButton/>
            {
                post &&
                <>
                <h2 className="font-bold text-5xl text-center mt-10 py-5">{post?.title}</h2>
                <div className="prose max-w-3xl dark:prose-invert mx-auto">
                    <div dangerouslySetInnerHTML={{ __html: md().render(post?.markdown ?? "") }} />
                </div>
                </>
            }
        </section>
        </>
    )
}

export default Post