"use client"
import { BackButton } from "components/ui/BackButton"
import Card from "components/ui/Card"
import { PostsConsumer } from "contexts/PostsContext"
import { useTranslation } from "react-i18next"

const Blog = () => {
    const { t } = useTranslation()
    const posts = PostsConsumer()
    return (
        <>
        <title>Blog - Jesusmarzor</title>
        <meta name="description" content=""/>
        <section className="max-w-7xl mx-auto overflow-hidden pt-28 pb-10 px-10">
            <BackButton/>
            <h2 className="text-5xl font-bold text-center">{t("common.blog")}</h2>
            <ul className="grid grid-cols-autoFill gap-8 items-center w-full pt-20">
                {
                   posts.map( ({slug, image, title, date, readingTime}) => <Card key={slug} image={image} title={title} description={t("blog.minutesOfReading").replace("@", String(readingTime))} date={date} to={`/blog/${slug}`}/>)
                }
            </ul>
        </section>
        </>
    )
}

export default Blog