import { useTranslation } from "react-i18next"
import { menuList } from "utils/constants"
import { Link } from "react-scroll"
import { MenuMobileConsumer } from "contexts/MenuMobileContext"
import { ProjectsConsumer } from "contexts/Projects"
import { Menu } from "utils/interfaces"

interface props {
    classesName: string
}

export const MenuList: React.FC<props> = ({classesName}) => {
    const { t } = useTranslation()
    const projects = ProjectsConsumer()
    const {menuIconRef} = MenuMobileConsumer()

    const filterProjects: Menu[] = projects.length === 0 ? menuList.filter( ({to}) => to !== "projects") : menuList

    return(
        <ul ref={menuIconRef} className={classesName}>
            {
                filterProjects.map( element => {
                    return <li key={element.to}><Link className="tracking-wider font-semibold bg-gradient-to-r from-orange-default to-orange-default cursor-default p-1 transition-backgroundSize duration-300 bg-[length:0%_2px] bg-no-repeat bg-bottom" activeClass="active" to={element.to} spy={true} smooth={true} offset={0} duration={800}>{t(element.titleKey)}</Link></li>
                })
            }
        </ul>
    )
}