"use client"
import Button from "components/ui/Button"
import { Input } from "components/ui/Input"
import Section from "components/ui/Section"
import { Spinner } from "components/ui/Spinner"
import useFormspree from "hooks/useFormspree"
import { useTranslation } from "react-i18next"
import { ButtonType, InputType } from "utils/enums"

export const Contact: React.FC = () => {
    const { t } = useTranslation()
    const {name, setName, email, setEmail, message, setMessage, response, errors, sendMail, loading} = useFormspree()

    return(
        <Section name="contact" title={t("common.contact")} titleClasses="text-center">
            <form className="flex flex-col gap-10 w-full sm:w-110 mx-auto my-10" method="POST" onSubmit={sendMail}>
                <Input title={t("common.name")} name="name" text={name} setText={setName}  error={errors.name}/>
                <Input title={t("common.email")} name="email" text={email} setText={setEmail} error={errors.email}/>
                <Input type={InputType.textarea} name="message" text={message} setText={setMessage} title={t("common.message")} error={errors.message}/>
                <Button type={ButtonType.input} classes={loading ? "pointer-events-none" : "pointer-events-auto"}>
                    {
                        loading ?
                        <Spinner classes="mx-auto fill-blue-400 !w-6 !h-6"/> :
                        t("common.send")
                    }
                </Button>
            </form>
            <div>
                {
                    (response !== null)
                    &&
                    <p className={`fixed bottom-5 left-5 right-5 sm:right-auto p-4 rounded text-center font-bold z-30 animate-message text-white-default ${response ? "bg-success-default"  : "bg-error-default"}`}>
                        {
                            response ? 
                            t('success.sent') :
                            t('error.sent')
                        }
                    </p>
                }
            </div>
        </Section>
    )
}