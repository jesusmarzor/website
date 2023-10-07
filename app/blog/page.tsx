"use client"
import { BackButton } from "components/ui/BackButton"
import Card from "components/ui/Card"
import { PostsConsumer } from "contexts/PostsContext"
import useSearch from "hooks/useSearch"
import { useTranslation } from "react-i18next"
import { Search } from "components/ui/Search"
import { Post } from "utils/interfaces"
import ScrollReveal from "components/ScrollReveal"
import { srPageList } from "utils/constants"
import useWindowTop from "hooks/useWindowTop"

const Blog = () => {
    useWindowTop()
    const { t } = useTranslation()
    const allPosts = PostsConsumer()
    const {list, didTapSearch, text, setText} = useSearch({allData: allPosts})
    
    return (
        <>
        <title>Blog - Jesusmarzor</title>
        <meta name="description" content="Articles created by Jesús Martín Zorrilla (jesusmarzor), web and iOS developer."/>
        <section className="max-w-7xl mx-auto overflow-hidden pt-28 pb-10 px-5 md:px-10 w-full">
            <header className="flex justify-between items-center gap-2">
                <BackButton/>
                <Search onSubmit={didTapSearch} value={text} setText={setText} placeholder={t("common.search")}/>
            </header>
            <h2 className="text-5xl font-bold text-center mt-10">{t("common.blog")}</h2>
            {
                list.length === 0 ?
                <p className="text-center mt-20">{t("blog.notFound")}</p> :
                <ScrollReveal classes="w-full pt-20 px-5 md:px-0" scrollRevealOptions={srPageList}>
                    <ul className="grid grid-cols-autoFill gap-8 items-center">
                        {
                        (list as Post[]).map( ({id, slug, image, title, date, readingTime}) => <Card key={id + title} id={id} image={image} title={title} description={t("blog.minutesOfReading").replace("@", String(readingTime))} date={date} to={`/blog/${slug}`}/>)
                        }
                    </ul>
                </ScrollReveal>
            }
        </section>
        </>
    )
}

export default Blog