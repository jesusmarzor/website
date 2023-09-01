import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Post } from "utils/interfaces"

interface props {
    allData: Post[]
}

const useSearch = ({allData}: props) => {
    const [posts, setPosts] = useState<Post[]>(allData)
    const [text, setText] = useState<string>("")
    const { i18n } = useTranslation()

    useEffect( () => {
        setPosts(allData)
    }, [allData])

    useEffect( () => {
        setText("")
    }, [i18n.language])

    const didTapSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPosts(text.length === 0 ? allData : allData.filter( ({title, tags}) => {
            return title.toLowerCase().includes(text.toLowerCase()) || tags.filter( tag => tag.toLowerCase().includes(text.toLowerCase())).length !== 0
        }))
    }

    return {posts, didTapSearch, text, setText}
}

export default useSearch