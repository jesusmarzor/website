import { socialNetworks } from "utils/constants"

interface props {
    classes?: string
}

export const SocialNetworks: React.FC<props> = ({classes}) => {
    return(
        <ul className={`flex justify-center items-center gap-10 ${classes}`}>
            {
                socialNetworks.map( sn => {
                    return (
                        <li key={sn.url} className="hover:scale-125 transition-transform duration-300">
                            <a href={sn.url} target="_blank">
                                <sn.icon size={28}/>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}