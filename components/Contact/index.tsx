"use client"
import Section from "components/ui/Section"
import useFormspree from "hooks/useFormspree"
import { useTranslation } from "react-i18next"
import { Form } from "components/Contact/Form"
import { Message } from "components/Contact/Message"

export const Contact: React.FC = () => {
    const { t } = useTranslation()
    const formData = useFormspree()

    return(
        <Section name="contact" title={t("common.contact")} titleClasses="text-center">
            <Form {...formData}/>
            <Message response={formData.response}/>
        </Section>
    )
}