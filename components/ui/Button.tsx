import React from "react";
import { Link } from "react-scroll";
import { ButtonType } from "utils/enums";

interface props {
    type: ButtonType
    to: string
    download?: string
    children: string
}

const Button: React.FC<props> = ({type, to, download, children}) => {
    return <Link className="px-4 py-2 bg-orange-default rounded-md cursor-default dark:text-black-default text-white-default" to={to}>{children}</Link>
}

export default React.memo(Button);