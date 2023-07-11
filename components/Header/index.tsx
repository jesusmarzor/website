"use client"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export const Header = () => {
    const { t } = useTranslation()
    return(
        <header className="p-4">
            <nav className="flex justify-between items-center gap-4 h-24">
                <Link href="/">
                    <Image
                        src="/img/logo.png"
                        priority={true}
                        width={500}
                        height={500}
                        alt="Website logo"
                        className="object-contain w-64"
                    />
                </Link>
                <ul className="flex gap-4">
                    <li>{t("common.home")}</li>
                    <li>{t("common.aboutMe")}</li>
                </ul>
            </nav>
        </header>
    )
}