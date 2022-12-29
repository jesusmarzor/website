import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useNavigation from "hooks/useNavigation";
import { Link } from "react-scroll";

export const Navigation = () => {
    const {items} = useNavigation()
    return(
        <ul className="flex flex-col justify-center items-start w-full">
            {
                items?.map( (item) => {
                    return (
                        <li key={item.text}>
                            <Link to={item.section} activeClass="Link__active" spy={true} smooth={true} offset={0} duration={800} className="flex justify-start gap-2 items-center tracking-wider w-full pl-16 py-4 uppercase cursor-pointer">
                                <FontAwesomeIcon className="Icon w-4" icon={item.icon}/>
                                {item.text}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}