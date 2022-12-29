import { Element } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import { SECTIONS } from "enums/SECTIONS";
import Image from "next/image";
import { Technologies } from "./Technologies";

export const AboutMe = () => {
    const { t: t_common } = useTranslation("common")
    const { t: t_about_me } = useTranslation("about-me")
    return(
        <Element name={SECTIONS.ABOUT_ME} className="p-10 bg-black-default">
            <h2 className="text-5xl text-center font-bold">{t_common("about-me")}</h2>
            <div className="flex justify-center align-center my-10">
                <div className="w-6/12 mr-10 py-5">
                    <section className="mb-5">
                        <h3 className="text-xl font-bold">{t_about_me("welcome")}</h3>
                        <p>{t_about_me("paragraph1")}</p>
                        <p>{t_about_me("paragraph2")}</p>
                    </section>
                    <Technologies/>
                </div>
                <div className="relative w-72 h-96 border-4 border-orange-default">
                    <Image
                        className="absolute top-2 right-2"
                        src=""
                        alt=""
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </div>
        </Element>
    )
}