import { useTranslation } from "react-i18next"
import { menuList } from "utils/constants"
import { Link } from "react-scroll"

export const MenuList: React.FC = () => {
    const { t } = useTranslation()
    
    return(
        <ul className="flex gap-4">
            {
                menuList.map( element => {
                    return <li key={element.to}><Link className="tracking-wider font-semibold bg-gradient-to-r from-orange-default to-orange-default cursor-default p-1 transition-backgroundSize duration-300 bg-[length:0%_2px] bg-no-repeat bg-bottom" activeClass="active" to={element.to} spy={true} smooth={true} offset={0} duration={800}>{t(element.titleKey)}</Link></li>
                })
            }
        </ul>
    )
}