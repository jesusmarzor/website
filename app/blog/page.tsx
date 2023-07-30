"use client"
import { BackButton } from "components/ui/BackButton"
import Card from "components/ui/Card"
import { PostsConsumer } from "contexts/PostsContext"
import useSearch from "hooks/useSearch"
import { useTranslation } from "react-i18next"
import { Search } from "components/ui/Search"
import useWindowTop from "hooks/useWindowTop"

const Blog = () => {
    useWindowTop()
    const { t } = useTranslation()
    const allPosts = PostsConsumer()
    const {posts, didTapSearch, setText} = useSearch({allData: allPosts})
    
    return (
        <>
        <title>Blog - Jesusmarzor</title>
        <meta name="description" content=""/>
        <section className="max-w-7xl mx-auto overflow-hidden pt-28 pb-10 px-10 w-full">
            <header className="flex justify-between items-center gap-2">
                <BackButton/>
                <Search onSubmit={didTapSearch} setText={setText} placeholder={t("common.search")}/>
            </header>
            <h2 className="text-5xl font-bold text-center mt-10">{t("common.blog")}</h2>
            {
                posts.length === 0 ?
                <p className="text-center mt-20">{t("blog.notFound")}</p> :
                <ul className="grid grid-cols-autoFill gap-8 items-center w-full pt-20">
                    {
                    posts.map( ({slug, image, title, date, readingTime}) => <Card key={slug} image={image} title={title} description={t("blog.minutesOfReading").replace("@", String(readingTime))} date={date} to={`/blog/${slug}`}/>)
                    }
                </ul>
            }
        </section>
        </>
    )
}

export default Blog