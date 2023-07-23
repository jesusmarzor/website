import { InputType } from "utils/enums"

interface props {
    type?: InputType
    title: string
}

export const Input: React.FC<props> = ({type = InputType.text, title}) => {
    return (
        <div className={`relative flex flex-col items-start rounded overflow-hidden`}>
            {
                type === InputType.textarea ?
                <textarea placeholder={title} className="peer text-black-default p-4 w-full border-2 placeholder-shown:border-transparent border-orange-default outline-none placeholder-transparent h-40"/> :
                <input type="text" placeholder={title} className="peer text-black-default px-4 pt-2 placeholder-shown:py-2 w-full border-2 placeholder-shown:border-transparent border-orange-default outline-none placeholder-transparent h-14"/>
            }
            <span className="absolute left-2 top-1 text-xs text-orange-default peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:text-base duration-300">
                {title}
            </span>
        </div>
    )
}