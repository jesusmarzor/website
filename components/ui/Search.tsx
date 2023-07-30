import Button from "components/ui/Button"
import { Search as SearchIcon } from "lucide-react"
import { ButtonType } from "utils/enums"

interface props {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    setText: (text: string) => void
    placeholder: string
}

export const Search = ({onSubmit, setText, placeholder}: props) => {
    return (
        <form className="flex rounded bg-white-default dark:bg-black-light" onSubmit={ e => onSubmit(e)}>
            <input className="ml-auto pl-2 rounded outline-none bg-transparent" onChange={e => setText(e.currentTarget.value)} placeholder={placeholder}/>
            <Button classes="!p-3 m-2" type={ButtonType.input}><SearchIcon size={20}/></Button>
        </form>
    )
}