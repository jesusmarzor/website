import React from "react"
import { Tag } from "components/ui/TagList/Tag"

interface props {
    id: number
    tags: string[]
    color?: string
}

export const TagList: React.FC<props> = ({id, tags, color}) => {
    return (
        <ul className="flex flex-wrap gap-x-1 gap-y-2">
            {
                tags.map( text => <Tag key={`${id}-${text}`} text={text} color={color}/>)
            }
        </ul>
    )
}