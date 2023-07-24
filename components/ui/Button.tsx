import React, { ReactNode } from "react"
import { Link } from "react-scroll"
import { ButtonType } from "utils/enums"

interface props {
    classes?: string
    type: ButtonType
    to?: string
    download?: string
    children: string | ReactNode
}

const Button: React.FC<props> = ({classes, type, to, download, children}) => {
    let buttonClass = "px-4 py-2 bg-orange-default rounded-md cursor-default dark:text-black-default text-white-default active:scale-press duration-100"
    switch (type) {
        case ButtonType.link:
            return <Link className={`${buttonClass} ${classes}`} to={to ?? ""} spy={true} smooth={true} offset={0} duration={800}>{children}</Link>

        case ButtonType.a:
            return <a className={`${buttonClass} ${classes}`} href={to}>{children}</a>
        
        case ButtonType.input:
            return <button type="submit" className={`${buttonClass} ${classes}`}>{children}</button>
    }
}

export default React.memo(Button)