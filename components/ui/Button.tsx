import { TYPES_BUTTONS } from "enums/TYPES_BUTTONS"
import { Link } from "react-scroll"

interface props {
    type?: TYPES_BUTTONS
    children: string
    isLink?: boolean
    goSection?: string
}

export const Button: React.FC<props> = ({type, isLink = false, goSection, children}) => {
    return(
        (isLink) ?
        <Link to={goSection!} activeClass="Link__active" spy={true} smooth={true} offset={0} duration={800} className="text-orange-default bg-black-light py-3 px-5 rounded-md cursor-pointer">
            {children}
        </Link> :
        <button type={type} className="text-orange-default bg-black-light py-3 px-5 rounded-md">
            {children}
        </button>
    )
}