import { useTranslation } from "react-i18next"
import { menuList } from "utils/constants"
import { Link } from "react-scroll"
import { MenuMobileConsumer } from "contexts/MenuMobileContext"
import { ProjectsConsumer } from "contexts/ProjectsContext"
import { Menu } from "utils/interfaces"
import { PostsConsumer } from "contexts/PostsContext"

interface props {
    classesName: string
}

export const MenuList: React.FC<props> = ({classesName}) => {
    const { t } = useTranslation()
    const projects = ProjectsConsumer()
    const posts = PostsConsumer()
    const {isShowedMenu, setIsShowedMenu, menuIconRef} = MenuMobileConsumer()

    const didTapMenuElement = () => {
        isShowedMenu && setIsShowedMenu(!isShowedMenu)
    }
    const filterMenu = (): Menu[] => {
        let menu = menuList
        
        if (projects.length === 0) {
            menu = menu.filter( ({to}) => to !== "projects")
        }

        if (posts.length === 0) {
            menu = menu.filter( ({to}) => to !== "blog")
        }

        return menu
    }

    return(
        <ul ref={menuIconRef} className={classesName}>
            {
                filterMenu().map( element => {
                    return <li key={element.to}><Link onClick={didTapMenuElement} className="tracking-wider font-semibold bg-gradient-to-r from-orange-default to-orange-default cursor-default p-1 transition-backgroundSize duration-300 bg-[length:0%_2px] bg-no-repeat bg-bottom" activeClass="active" to={element.to} spy={true} smooth={true} offset={0} duration={800}>{t(element.titleKey)}</Link></li>
                })
            }
        </ul>
    )
}