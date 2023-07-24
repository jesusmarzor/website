"use client"
import { SocialNetworks } from "components/SocialNetworks"
import { useTranslation } from "react-i18next"
import { textLogo } from "utils/constants"

export const Footer: React.FC = () => {
    const { t } = useTranslation()
    return(
        <footer className="bg-white-default dark:bg-black-light flex flex-col justify-center items-center gap-10 p-10">
            <SocialNetworks/>
            <p className="border-t-0.5 dark:border-white-default border-black-light w-full text-center pt-10">&copy;{new Date().getFullYear()} {textLogo.name}{textLogo.lastName}. {t("copy")}</p>
        </footer>
    )
}