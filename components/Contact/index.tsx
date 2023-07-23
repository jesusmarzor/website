"use client"
import Button from "components/ui/Button"
import { Input } from "components/ui/Input"
import Section from "components/ui/Section"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { ButtonType, InputType } from "utils/enums"
import { FormErrors } from "utils/interfaces"
import validationForm from "utils/validationForm"

export const Contact: React.FC = () => {
    const { t } = useTranslation()
    const formRef = useRef<HTMLFormElement>(null)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [errors, setErrors] = useState<FormErrors>({})

    const didTapSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validationForm(name, email, message, setErrors)) {
            console.log("send form")
            setName("")
            setEmail("")
            setMessage("")
        }
    }

    return(
        <Section name="contact" title={t("common.contact")} titleClasses="text-center">
            <form ref={formRef} className="flex flex-col gap-10 w-full sm:w-110 mx-auto my-10" onSubmit={ e => didTapSubmit(e)}>
                <Input title={t("common.name")} text={name} setText={setName} error={errors.name}/>
                <Input title={t("common.email")} text={email} setText={setEmail} error={errors.email}/>
                <Input type={InputType.textarea} text={message} setText={setMessage} title={t("common.message")} error={errors.message}/>
                <Button type={ButtonType.input}>{t("common.send")}</Button>
            </form>
        </Section>
    )
}