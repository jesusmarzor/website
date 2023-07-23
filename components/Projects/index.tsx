"use client"
import Section from "components/ui/Section"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export const Projects: React.FC = () => {
    const { t } = useTranslation()
    return(
        <Section name="projects" title="Projects" titleClasses="text-center">
            <ul className="grid grid-cols-autoFill gap-8 items-center py-10">
                <li className="bg-blue-500 w-full minProject:w-86 mx-auto rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                    <a className="" href="https://jesusmarzor.vercel.app" target="_blank">
                        <Image
                            src="/img/projects/"
                            width={1200}
                            height={1200}
                            alt="Picture of the author"
                            className="object-contain h-52 bg-red-300"
                            priority={true}
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">Título</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ea nostrum sunt cum. Exercitationem inventore officiis reiciendis nam numquam quasi cum dolores repudiandae excepturi amet provident fugit, eos ratione accusantium.</p>
                        </div>
                    </a>
                </li>
            </ul>
        </Section>
    )
}