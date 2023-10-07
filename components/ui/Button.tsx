import React, { ReactNode } from "react"
import { Link as LinkScroll } from "react-scroll"
import { ButtonType } from "utils/enums"
import Link from 'next/link'

interface props {
    classes?: string
    type: ButtonType
    to?: string
    download?: string
    title?: string
    children: string | ReactNode
}

const Button: React.FC<props> = ({classes, type, to, download, title, children}) => {
    let buttonClass = "px-4 py-2 bg-orange-default rounded-md cursor-default dark:text-black-default text-white-default active:scale-press duration-100"
    switch (type) {
        case ButtonType.link:
            return <LinkScroll className={`${buttonClass} ${classes}`} to={to ?? ""} spy={true} smooth={true} offset={0} duration={800}>{children}</LinkScroll>

        case ButtonType.a:
            return <a className={`${buttonClass} ${classes}`} href={to} target="_blank" rel="noreferrer">{children}</a>
        
        case ButtonType.input:
            return <button type="submit" className={`${buttonClass} ${classes}`} title={title}>{children}</button>

        case ButtonType.download:
            return <a className={`${buttonClass} ${classes}`} href={to} target="_blank" rel="noreferrer" download={download}>{children}</a>

        case ButtonType.navigation:
            return <Link className={`${buttonClass} ${classes}`} href={to ?? ""}>{children}</Link>
    }
}

export default React.memo(Button)