"use client"
import Button from "components/ui/Button"
import Section from "components/ui/Section"
import { useTranslation } from "react-i18next"
import { Element } from "react-scroll"
import { ButtonType } from "utils/enums"

export const AboutMe: React.FC = () => {
    const { t } = useTranslation()
    return(
        <Section name="aboutMe" title={t("common.aboutMe")} titleClasses="w-1/3 text-end" sectionClasses="flex justify-center items-center gap-10">
            <div className="w-2/3 px-10">
                <p className="mb-1">{t("aboutMe.p1")}</p>
                <p className="mb-1">{t("aboutMe.p2")}</p>
                <p className="mb-4">{t("aboutMe.p3")}</p>
                <div className="flex gap-2">
                    <Button type={ButtonType.link} to="/blog">{t("common.projects")}</Button>
                    <Button type={ButtonType.download} to="">{t("common.downloadCV")}</Button>
                </div>
            </div>
        </Section>
    )
}