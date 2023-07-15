"use client"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { LanguageIcon } from "components/Header/LanguageIcon"
import { ThemeIcon } from "./ThemeIcon"

export const Header: React.FC = () => {
    const { t } = useTranslation()

    return(
        <header className="p-6 bg-white dark:bg-black-light">
            <nav className="flex justify-between items-center gap-4 max-w-7xl mx-auto">
                <Link href="/" rel="preload" className="text-2xl mr-auto">
                    <span className="font-bold">Jesús</span> Martín
                </Link>
                <ul className="flex gap-4">
                    <li className="active">{t("common.home")}</li>
                    <li>{t("common.aboutMe")}</li>
                    <li>{t("common.projects")}</li>
                    <li>{t("common.contact")}</li>
                </ul>
                <ThemeIcon/>
                <LanguageIcon/>
            </nav>
        </header>
    )
}