import { ReactNode } from "react"
import { Element } from "react-scroll"

interface props {
    name: string
    title: string
    sectionClasses?: string
    titleClasses?: string
    children: ReactNode
}

const Section: React.FC<props> = ({name, title, sectionClasses, titleClasses, children}) => {
    return(
        <Element name={name} className={`max-w-7xl mx-auto overflow-hidden pt-28 px-10 ${sectionClasses}`}>
            <h2 className={`font-bold text-5xl ${titleClasses}`}>{title}</h2>
            {children}
        </Element>
    )
}

export default Section