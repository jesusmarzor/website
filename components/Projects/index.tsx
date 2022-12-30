import { Element } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import { SECTIONS } from "enums/SECTIONS";

export const Projects = () => {
    const { t: t_common } = useTranslation("common")
    return(
        <Element name={SECTIONS.PROJECTS} className="p-10 bg-black-default">
            <h2 className="text-4xl text-center font-bold">{t_common("projects")}</h2>
        </Element>
    )
}