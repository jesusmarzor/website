import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Post, Project } from "utils/interfaces"

interface props {
    allData: Post[] | Project[]
}

const useSearch = ({allData}: props) => {
    const [list, setList] = useState<Post[] | Project[]>(allData)
    const [text, setText] = useState<string>("")
    const { i18n } = useTranslation()

    useEffect( () => {
        setList(allData)
    }, [allData])

    useEffect( () => {
        setText("")
    }, [i18n.language])

    const didTapSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setList(text.length === 0 ? allData : (allData as any[]).filter( ({title, tags}: Post | Project) => {
            return title.toLowerCase().includes(text.toLowerCase()) || tags.filter( tag => tag.toLowerCase().includes(text.toLowerCase())).length !== 0
        }))
    }

    return {list, didTapSearch, text, setText}
}

export default useSearch