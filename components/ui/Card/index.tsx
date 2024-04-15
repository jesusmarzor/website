import React, { CSSProperties } from "react"
import useDate from "hooks/useDate"
import Image from "next/image"
import { CardLink } from "components/ui/Card/CardLink"
import { useTranslation } from "react-i18next"
import { TagList } from "components/ui/TagList"

interface props {
    id: number
    image: string
    title: string
    description: string
    date?: string
    to: string
    tags?: string[]
    color?: string
    classes: string
    styles: CSSProperties
}

const Card =  ({id, image, title, description, date, to, tags, color, classes, styles}: props) => {
    const { t } = useTranslation()
    const { isShowedNew, getDateString } = useDate()
    return (
        <li className={`relative border border-black-default dark:border-white-default w-full h-full minProject:w-86 mx-auto rounded-xl animate-fade-up-custom ${classes}`} style={styles}>
            { typeof date === "string" && isShowedNew(date) &&
                <p className="rounded-full px-4 py-2 absolute -right-2 -top-2 bg-orange-default animate-bounce z-10">{t("common.new")}</p>
            }
            <CardLink href={to}>
                <Image
                style={{backgroundColor: color}}
                src={image}
                width={1200}
                height={675}
                alt={`Image of ${title}`}
                className="object-contain w-86 minIntroduce:w-105 rounded-tl-xl rounded-tr-xl"
                priority={true}
                />
                <div className="flex flex-col justify-start items-start p-4 gap-2 overflow-hidden w-full h-full rounded-bl-xl rounded-br-xl">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    {
                        (tags as string[])?.length >= 0 &&
                        <TagList id={id} tags={tags as string[]} color={color}/>
                    }
                    <p className={`${typeof date === "string" && "text-sm"}`}>{description}</p>
                    {
                        typeof date === "string" &&
                        <p className="ml-auto mt-auto">{getDateString(date)}</p>
                    }
                </div>
            </CardLink>
        </li>
    )
}

export default Card