import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_NETWORKS } from "utils/CONSTANTS";

export const SocialNetworks = () => {
    return(
        <ul className="flex justify-center items-center gap-6">
        {
            SOCIAL_NETWORKS.map( item => {
                return (
                    <li key={item.url}>
                        <a href={item.url} target="_blank">
                            <FontAwesomeIcon className="w-6" icon={item.icon}/>
                        </a>
                    </li>
                )
            })
        }
        </ul>
    )
}