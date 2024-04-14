"use client"
import { PostsConsumer } from "contexts/PostsContext"
import { BackButton } from "components/ui/BackButton"
import useWindowTop from "hooks/useWindowTop"
import { authorName, textLogo } from "utils/constants"
import MarkdownCode from "components/MarkdownCode"

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
    <meta property="og:url" content={post?.image}/>
    <meta property="og:image" content={post?.image}/>
    <meta property="og:title" content={post?.title}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content={post?.image}/>
    <meta name="twitter:title" content={post?.title}/>
    <meta name="twitter:image" content={post?.image}/>
    <section className="max-w-7xl mx-auto overflow-hidden pt-32 pb-10 px-5 md:px-10 w-full">
      <BackButton/>
      {
        post &&
        <>
          <h2 className="font-bold text-5xl text-center mt-10 py-5">{post?.title}</h2>
          <div className="prose max-w-3xl dark:prose-invert mx-auto">
          <MarkdownCode markdown={post.markdown}/>
          </div>
        </>
      }
    </section>
    </>
  )
}

export default Post