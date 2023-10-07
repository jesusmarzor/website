import Button from "components/ui/Button"
import { Input } from "components/ui/Input"
import { Spinner } from "components/ui/Spinner"
import { useTranslation } from "react-i18next"
import { ButtonType, InputType } from "utils/enums"
import { FormErrors } from "utils/interfaces"

interface props {
    name: string
    setName: (name: string) => void
    email: string
    setEmail: (email: string) => void
    message: string
    setMessage: (message: string) => void
    errors: FormErrors
    loading: boolean
    sendMail: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Form: React.FC<props> = ({name, setName, email, setEmail, message, setMessage, errors, loading, sendMail}) => {
    const { t } = useTranslation()
    return (
        <form className="flex flex-col gap-10 w-full sm:w-110 mx-auto my-12" method="POST" onSubmit={sendMail}>
            <Input title={t("common.name")} name="name" text={name} setText={setName}  error={errors.name}/>
            <Input title={t("common.email")} name="email" text={email} setText={setEmail} error={errors.email}/>
            <Input type={InputType.textarea} name="message" text={message} setText={setMessage} title={t("common.message")} error={errors.message}/>
            <Button type={ButtonType.input} classes={loading ? "pointer-events-none" : "pointer-events-auto"} title={t("common.send")}>
                {
                    loading ?
                    <Spinner classes="mx-auto fill-blue-400 !w-6 !h-6"/> :
                    t("common.send")
                }
            </Button>
        </form>
    )
}