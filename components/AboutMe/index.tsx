"use client"
import Button from "components/ui/Button"
import Section from "components/ui/Section"
import useCV from "hooks/useCV"
import { useTranslation } from "react-i18next"
import { projectsUrl } from "utils/constants"
import { ButtonType } from "utils/enums"

export const AboutMe: React.FC = () => {
    const { t } = useTranslation()
    const cv = useCV()
    return(
        <Section name="aboutMe" title={t("common.aboutMe")} titleClasses="minIntroduce:w-1/3 minIntroduce:text-end" sectionClasses="flex flex-col justify-center items-center gap-10 minIntroduce:flex-row">
            <div className="minIntroduce:w-2/3 minIntroduce:px-10">
                <p className="mb-1">{t("aboutMe.p1")}</p>
                <p className="mb-1">{t("aboutMe.p2")}</p>
                <p className="mb-4">{t("aboutMe.p3")}</p>
                <div className="flex gap-2">
                    <Button type={ButtonType.a} to={projectsUrl}>{t("common.projects")}</Button>
                    {
                        cv.length !== 0 &&
                        <Button type={ButtonType.download} to={cv} download="CV-Jesus-Martin">{t("common.downloadCV")}</Button>
                    }
                </div>
            </div>
        </Section>
    )
}