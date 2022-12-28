import { Button } from "components/ui/Button";
import { Element } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import { SECTIONS } from "enums/SECTIONS";
import Image from "next/image";

export const AboutMe = () => {
    const { t } = useTranslation("common")
    return(
        <Element name={SECTIONS.ABOUT_ME} className="p-10 font-bold bg-black-default">
            <h2 className="text-5xl text-center">{t("about-me")}</h2>
            <div className="flex justify-center align-center my-10">
                <div className="w-6/12 mr-10">
                    <p>¡Bienvenidos a mi pequeño espacio de internet!</p>
                    <p>Soy Jesús, ingeniero informático. Me considero una persona responsable, organizada e implicada en todo lo que hago.</p>
                    <p>He trabajado como React developer y ahora trabajo como iOS developer. Gracias a mi curiosidad y a mi experiencia profesional siento que puedo conseguir todo lo que me proponga.</p>
                </div>
                <div className="relative w-[280px] h-[350px] border-4 border-orange-default">
                    <Image
                        className="absolute top-2 right-2"
                        src=""
                        alt=""
                        width={280}
                        height={280}
                        priority
                    />
                </div>
            </div>
        </Element>
    )
}