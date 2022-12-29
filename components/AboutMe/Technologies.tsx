import useTranslation from "next-translate/useTranslation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TECHNOLOGIES } from "utils/CONSTANTS";

export const Technologies = () => {
    const { t: t_common } = useTranslation("common")
    const { t: t_about_me } = useTranslation("about-me")
    return(
        <section>
            <h3 className="text-xl font-bold">{t_common("technologies")}</h3>
            <p>{t_about_me("paragraph_technologies")}</p>
            <ul className="columns-2 gap-6 mt-5">
                {
                    TECHNOLOGIES.map( item => {
                        return(
                            <li key={item.name} className="flex justify-start items-center mb-2">
                                <FontAwesomeIcon className="w-5 mr-1" icon={item.icon}/>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}