"use client"
import { Input } from "components/ui/Input"
import Section from "components/ui/Section"
import { useTranslation } from "react-i18next"
import { InputType } from "utils/enums"

export const Contact: React.FC = () => {
    const { t } = useTranslation()
    return(
        <Section name="contact" title={t("common.contact")} titleClasses="text-center">
            <form className="flex flex-col gap-10 w-full sm:w-110 mx-auto my-10">
                <Input title={t("common.name")}/>
                <Input title={t("common.email")}/>
                <Input type={InputType.textarea} title={t("common.message")}/>
            </form>
        </Section>
    )
}