"use client"
import { SocialNetworks } from "components/SocialNetworks"
import Button from "components/ui/Button"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { Element } from "react-scroll"
import { authorName } from "utils/constants"
import { ButtonType } from "utils/enums"

export const Introduce: React.FC = () => {
    const { t } = useTranslation()
    return(
        <Element name="home" className="max-w-7xl mx-auto overflow-hidden pt-20 px-10 w-full">
            <div className="flex flex-col justify-center items-center gap-4 py-10 minIntroduce:py-20 minIntroduce:flex-row">
                <section className="text-center minIntroduce:text-start w-full minIntroduce:w-1/2 order-2 minIntroduce:order-1">
                    <h2 className="text-5xl minIntroduce:text-6xl font-bold">{authorName}</h2>
                    <p className="py-4 text-xl font-semibold">{t("introduce.description")}</p>
                    <SocialNetworks classes="minIntroduce:!justify-start mb-7"/>
                    <Button type={ButtonType.link} to="contact" classes="text-lg">{t("common.writeMe")}</Button>
                </section>
                <Image
                src="/img/profile.png"
                width={1200}
                height={1200}
                alt="Picture of the author"
                className="object-contain w-86 minIntroduce:w-105 order-1 minIntroduce:order-2"
                priority={true}
                />
            </div>
        </Element>
    )
}