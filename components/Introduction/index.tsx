import { Button } from "components/ui/Button";
import { Element } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import { SECTIONS } from "enums/SECTIONS";
import { TYPES_BUTTONS } from "enums/TYPES_BUTTONS";

export const Introduction = () => {
    const { t: t_common } = useTranslation("common")
    return(
        <Element name={SECTIONS.HOME} className="min-h-screen p-10 bg-black-default bg-opacity-60 flex flex-col justify-center items-center text-lg">
            <h1 className="text-8xl font-bold ">Jesús Martín</h1>
            <p className="my-5 text-3xl font-extralight">{t_common("ios-developer")}</p>
            <Button type={TYPES_BUTTONS.NAVIGATION} goSection={SECTIONS.CONTACT}>{t_common("contact-me")}</Button>
        </Element>
    )
}