import { useEffect, useState } from "react"
import { Post } from "utils/interfaces"

interface props {
    allData: Post[]
}

const useSearch = ({allData}: props) => {
    const [posts, setPosts] = useState<Post[]>(allData)
    const [text, setText] = useState<string>("")

    useEffect( () => {
        setPosts(allData)
    }, [allData])

    const didTapSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPosts(text.length === 0 ? allData : allData.filter( ({title}) => title.toLowerCase().includes(text.toLocaleLowerCase())))
    }

    return {posts, didTapSearch, setText}
}

export default useSearch