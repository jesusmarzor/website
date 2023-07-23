import { useTranslation } from "react-i18next"

interface props {
    response: boolean | null
}

export const Message: React.FC<props> = ({response}) => {
    const { t } = useTranslation()
    return (
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
    )
}