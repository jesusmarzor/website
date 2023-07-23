import React from "react";
import { Link } from "react-scroll";
import { ButtonType } from "utils/enums";

interface props {
    type: ButtonType
    to?: string
    download?: string
    children: string
}

const Button: React.FC<props> = ({type, to, download, children}) => {
    let classes = "px-4 py-2 bg-orange-default rounded-md cursor-default dark:text-black-default text-white-default active:scale-press duration-100"
    switch (type) {
        case ButtonType.link:
            return <Link className={classes} to={to ?? ""}>{children}</Link>

        case ButtonType.a:
            return <a className={classes} href={to}>{children}</a>
        
        case ButtonType.input:
            return <button type="submit" className={classes}>{children}</button>
    }
}

export default React.memo(Button);