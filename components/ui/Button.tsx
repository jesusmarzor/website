import { SECTIONS } from "enums/SECTIONS"
import { TYPES_BUTTONS } from "enums/TYPES_BUTTONS"
import { Link } from "react-scroll"

interface props {
    type: TYPES_BUTTONS
    children: string
    goSection?: string
    file?: string,
    nameFile?: string
}
export const Button: React.FC<props> = ({type, goSection = SECTIONS.HOME, file = "", nameFile = "", children}) => {
    switch (type) {
        case TYPES_BUTTONS.NAVIGATION:
            return (
                <Link to={goSection} activeClass="Link__active" spy={true} smooth={true} offset={0} duration={800} className="text-orange-default text-center bg-black-light py-3 px-5 rounded-md cursor-pointer">
                    {children}
                </Link> 
            )
        case TYPES_BUTTONS.DOWNLOAD:
            return (
                <a href={file} className="mx-auto text-black-light text-center bg-orange-default py-3 px-5 rounded-md" rel='noreferrer' title={nameFile} download={nameFile}>{children}</a>
            )
        default:
            return (
                <button type={type} className="text-orange-default text-center bg-black-light py-3 px-5 rounded-md">
                    {children}
                </button>
            )
    }
}