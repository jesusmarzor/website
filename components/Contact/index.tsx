import { Element } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import { SECTIONS } from "enums/SECTIONS";

export const Contact = () => {
    const { t: t_common } = useTranslation("common")
    return(
        <Element name={SECTIONS.CONTACT} className="p-10 bg-black-default">
            <h2 className="text-4xl text-center font-bold">{t_common("contact")}</h2>
        </Element>
    )
}