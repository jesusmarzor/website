import Link from "next/link"
import { ReactNode } from "react"

interface props {
    href: string
    children: ReactNode
}

export const CardLink: React.FC<props> = ({href, children}) => {
    let classes = "relative flex flex-col justify-start items-center h-full"
    return (
        href.includes("https") ?
        <a href={href} className={classes} target="_blank" rel="noreferrer">
            {children}
        </a> :
        <Link href={href} className={classes}>
            {children}
        </Link>
    )
}