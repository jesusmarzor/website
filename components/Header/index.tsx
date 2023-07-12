"use client"
import Link from "next/link"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { FaLanguage } from "react-icons/fa"
import { languages } from "utils/CONSTANTS"

export const Header = () => {
    const { t, i18n } = useTranslation()
    const languagesRef = useRef<HTMLDivElement>(null)

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    }

    const showLanguageList = () => {
        languagesRef.current?.classList.remove("hidden")
    }

    const closeLanguageList = () => {
        languagesRef.current?.classList.add("hidden")
    }

    return(
        <header className="p-4">
            <nav className="flex justify-between items-center gap-4 h-24">
                <Link href="/" className="text-2xl">
                    <span className="font-bold">Jesús</span> Martín
                </Link>
                <ul className="flex gap-4">
                    <li className="active">{t("common.home")}</li>
                    <li>{t("common.aboutMe")}</li>
                    <li>{t("common.projects")}</li>
                    <li>{t("common.contact")}</li>
                </ul>
                <div className="relative">
                    <FaLanguage onClick={showLanguageList} className="text-2xl"/>
                    <div ref={languagesRef} className="absolute top-10 right-1 border hidden p-4 pt-10 bg-white cursor-default">
                        <div className="w-4 h-4 bg-gray-400 rotate-45 absolute -top-2 right-1 -z-10"></div>
                        <span className="absolute top-2 right-2" onClick={closeLanguageList}>x</span>
                        <ul className="flex flex-col gap-2 z-10">
                            {
                                languages.map( lang => {
                                    return <li key={lang.code} onClick={() => changeLanguage(lang.code)}>{t(lang.nameKey)}</li>
                                }) 
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}