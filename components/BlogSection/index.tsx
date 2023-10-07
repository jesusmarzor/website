"use client"
import Button from "components/ui/Button"
import Card from "components/ui/Card"
import Section from "components/ui/Section"
import { PostsConsumer } from "contexts/PostsContext"
import { useTranslation } from "react-i18next"
import { maxNumCardsInHomeSections, srPostsHome } from "utils/constants"
import { ButtonType } from "utils/enums"
import ScrollReveal from "components/ScrollReveal"

export const BlogSection: React.FC = () => {
    const { t } = useTranslation()
    const posts = PostsConsumer().slice(0, maxNumCardsInHomeSections)
    return(
        posts.length !== 0 &&
        <Section name="blog" title={t("common.blog")} titleClasses="text-center" sectionClasses="flex flex-col justify-center items-center gap-10">
            <ScrollReveal classes="w-full pt-10" scrollRevealOptions={srPostsHome}>
                <ul className="grid grid-cols-autoFill gap-8 items-center">
                    {
                        posts.map( ({id, slug, image, title, date, readingTime}) => <Card key={id + title} id={id} image={image} title={title} description={t("blog.minutesOfReading").replace("@", String(readingTime))} date={date} to={`/blog/${slug}`}/>)
                    }
                </ul>
            </ScrollReveal>
            <Button classes="" type={ButtonType.navigation} to="/blog">{t("common.seeAll")}</Button>
        </Section>
    )
}