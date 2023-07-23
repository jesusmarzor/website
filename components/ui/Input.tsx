import { useTranslation } from "react-i18next"
import { InputType } from "utils/enums"

interface props {
    type?: InputType
    name: string
    title: string
    text: string,
    setText: (text: string) => void
    error?: string
}

export const Input: React.FC<props> = ({type = InputType.text, name, title, text, setText, error}) => {
    const { t } = useTranslation()
    const isError = error !== undefined 
    return (
        <div className="relative">
            <div className={`relative flex flex-col items-start rounded overflow-hidden`}>
                {
                    type === InputType.textarea ?
                    <textarea onChange={e => setText(e.currentTarget.value)} name={name} value={text} placeholder={title} className={`peer text-black-default p-4 w-full border-2 outline-none placeholder-transparent h-40 ${isError ? "border-error-default placeholder-shown:border-error-default" : "border-orange-default placeholder-shown:border-transparent"}`}/> :
                    <input onChange={e => setText(e.currentTarget.value)} name={name} value={text} type="text" placeholder={title} className={`peer text-black-default px-4 pt-2 placeholder-shown:py-2 w-full border-2 outline-none placeholder-transparent h-14 ${isError ? "border-error-default placeholder-shown:border-error-default" : "border-orange-default placeholder-shown:border-transparent"}`}/>
                }
                <span className={`absolute left-2 top-1 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:text-base duration-300 ${isError ? "text-error-default peer-placeholder-shown:text-error-default" : "text-orange-default peer-placeholder-shown:text-gray-400 "}`}>
                    {title}
                </span>
            </div>
            { isError && <p className="absolute -bottom-6 left-0 text-error-default">{t(error)}</p>}
        </div>
    )
}