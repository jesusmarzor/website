"use client"
import { PostsConsumer } from "contexts/PostsContext"
import { BackButton } from "components/ui/BackButton"
import useWindowTop from "hooks/useWindowTop"
import { authorName, textLogo } from "utils/constants"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import ReactMarkdown from "react-markdown"

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
        <title>{`${post?.title ?? "Blog"} - ${textLogo.name}${textLogo.lastName}`}</title>
        <meta name="description" content={`Article about: ${post?.title ?? "programming"}, written by ${authorName} (${textLogo.name}${textLogo.lastName}), web and iOS developer.`}/>
        <section className="max-w-7xl mx-auto overflow-hidden pt-32 pb-10 px-5 md:px-10 w-full">
            <BackButton/>
            {
                post &&
                <>
                <h2 className="font-bold text-5xl text-center mt-10 py-5">{post?.title}</h2>
                <div className="prose max-w-3xl dark:prose-invert mx-auto">
                <ReactMarkdown
                    components={{
                        code({ className, ...props }) {
                        const hasLang = /language-(\w+)/.exec(className || "");
                        return hasLang ? (
                            <SyntaxHighlighter
                            style={oneDark}
                            language={hasLang[1]}
                            PreTag="div"
                            className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
                            showLineNumbers={true}
                            useInlineStyles={true}
                            >
                            {String(props.children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props} />
                        );
                        },
                    }}
                    >
                    {post.markdown}
                    </ReactMarkdown>
                </div>
                </>
            }
        </section>
        </>
    )
}

export default Post