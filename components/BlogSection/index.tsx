"use client"
import Button from "components/ui/Button"
import Card from "components/ui/Card"
import Section from "components/ui/Section"
import { PostsConsumer } from "contexts/PostsContext"
import { useTranslation } from "react-i18next"
import { maxNumCardsInHomeSections } from "utils/constants"
import { ButtonType } from "utils/enums"

export const BlogSection: React.FC = () => {
    const { t } = useTranslation()
    const posts = PostsConsumer().slice(0, maxNumCardsInHomeSections)
    return(
        posts.length !== 0 &&
        <Section name="blog" title={t("common.blog")} titleClasses="text-center" sectionClasses="flex flex-col justify-center items-center gap-10">
            <ul className="w-full grid grid-cols-autoFill gap-8 items-center pt-10">
                {
                    posts.map( ({id, slug, image, title, date, readingTime}, index) => <Card key={id + title} id={id} image={image} title={title} description={t("blog.minutesOfReading").replace("@", String(readingTime))} date={date} to={`/blog/${slug}`} classes="animate-fadeRightCustom opacity-0" styles={{ '--animate-delay': `${index * 50}ms` } as any}/>)
                }
            </ul>
            <Button type={ButtonType.navigation} to="/blog">{t("common.seeAll")}</Button>
        </Section>
    )
}