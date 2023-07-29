"use client"
import Section from "components/ui/Section"
import { PostsConsumer } from "contexts/PostsContext"
import useDate from "hooks/useDatePost"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { maxNumCardsInHomeSections } from "utils/constants"

export const BlogSection: React.FC = () => {
    const { t } = useTranslation()
    const posts = PostsConsumer().slice(0, maxNumCardsInHomeSections)
    const {getDateString, isShowedNew} = useDate()
    return(
        <Section name="blog" title={t("common.blog")} titleClasses="text-center">
            <ul className="grid grid-cols-autoFill gap-8 items-center pt-20 pb-5">
                {
                    posts.map( post => {
                        return (
                            <li key={post.slug} className="relative border border-black-default dark:border-white-default w-full h-full minProject:w-86 mx-auto rounded-xl hover:scale-105 transition-transform duration-300">
                                { isShowedNew(post.date) &&
                                <p className="rounded-full px-4 py-2 absolute -right-2 -top-2 bg-orange-default animate-bounce z-10">{t("common.new")}</p>
                                }
                                <Link href={`blog/${post.slug}`} className="relative flex flex-col justify-start items-center h-full">
                                    <Image
                                    src={post.image}
                                    width={1200}
                                    height={1200}
                                    alt={`Image of ${post.title}`}
                                    className="object-contain w-86 minIntroduce:w-105 rounded-tl-xl rounded-tr-xl"
                                    priority={true}
                                    />
                                    <div className="flex flex-col justify-start items-start p-4 gap-2 overflow-hidden w-full h-full rounded-bl-xl rounded-br-xl">
                                        <h3 className="text-2xl font-bold">{post.title}</h3>
                                        <p className="text-sm">{post.readingTime} min de lectura</p>
                                        <p className="ml-auto mt-auto">{getDateString(post.date)}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Section>
    )
}