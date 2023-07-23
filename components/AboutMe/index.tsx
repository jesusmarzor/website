"use client"
import Button from "components/ui/Button"
import Section from "components/ui/Section"
import { useTranslation } from "react-i18next"
import { Element } from "react-scroll"
import { ButtonType } from "utils/enums"

export const AboutMe: React.FC = () => {
    const { t } = useTranslation()
    return(
        <Section name="aboutMe" title="About me" titleClasses="w-1/3 text-end" sectionClasses="flex justify-center items-center gap-10">
            <div className="w-2/3 px-10">
                <p className="mb-1">I am Jesús Martín Zorrilla, a computer engineer. I consider myself a responsible, organized, and committed person in everything I do.</p>
                <p className="mb-1">I have worked as React developer and now I am working as iOS developer. Thanks to my curiosity and professional experience, I feel that I can achieve everything I set my mind to.</p>
                <p className="mb-4">I leave direct links to my projects and my resume.</p>
                <div className="flex gap-2">
                    <Button type={ButtonType.link} to="/blog">Projects</Button>
                    <Button type={ButtonType.download} to="">Download CV</Button>
                </div>
            </div>
        </Section>
    )
}