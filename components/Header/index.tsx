import Link from "next/link"
import { useTranslation } from "react-i18next"
import { FaSun } from "react-icons/fa"
import { LanguageIcon } from "./LanguageIcon"

export const Header: React.FC = () => {
    const { t } = useTranslation()

    return(
        <header className="p-6 bg-black-light">
            <nav className="flex justify-between items-center gap-4 max-w-7xl mx-auto">
                <Link href="/" className="text-2xl mr-auto">
                    <span className="font-bold">Jesús</span> Martín
                </Link>
                <ul className="flex gap-4">
                    <li className="active">{t("common.home")}</li>
                    <li>{t("common.aboutMe")}</li>
                    <li>{t("common.projects")}</li>
                    <li>{t("common.contact")}</li>
                </ul>
                <FaSun className="ml-auto text-2xl"/>
                <LanguageIcon/>
            </nav>
        </header>
    )
}