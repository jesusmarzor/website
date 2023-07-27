"use client"
import { PostsConsumer } from "contexts/PostsContext"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import md from "markdown-it"

interface Params {
    slug: string
}

interface props {
    params: Params
}

const Post: React.FunctionComponent<props> = ({params})  => {
    const post = PostsConsumer().filter( ({slug}) => slug === params.slug)[0]
    const router = useRouter()
    return (
        <section className="max-w-7xl mx-auto overflow-hidden pt-28 px-10">
            <button onClick={router.back}>
                <ArrowLeft/>
            </button>
            {
                post !== null &&
                <>
                <h2 className="font-bold text-5xl text-center py-5">{post?.title}</h2>
                <div className="prose dark:prose-invert mx-auto">
                    <div dangerouslySetInnerHTML={{ __html: md().render(post?.markdown ?? "") }} />
                </div>
                </>
            }
        </section>
    )
}

export default Post