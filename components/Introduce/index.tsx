"use client"
import Button from "components/ui/Button"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { Element } from "react-scroll"
import { authorName } from "utils/constants"
import { ButtonType } from "utils/enums"

export const Introduce: React.FC = () => {
    const { t } = useTranslation()
    return(
        <Element name="home" className="max-w-7xl mx-auto overflow-hidden pt-20 px-10">
            <div className="flex justify-center items-center gap-4 py-20">
                <section className="w-1/2">
                    <h2 className="text-6xl font-bold">{authorName}</h2>
                    <p className="py-4 text-xl font-semibold">{t("introduce.description")}</p>
                    <Button type={ButtonType.link} to="contact">{t("common.writeMe")}</Button>
                </section>
                <Image
                src="/img/profile.png"
                width={1200}
                height={1200}
                alt="Picture of the author"
                className="object-contain w-[450px]"
                priority={true}
                />
            </div>
        </Element>
    )
}