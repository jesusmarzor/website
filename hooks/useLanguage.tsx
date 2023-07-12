import { i18n } from "i18next";
import { useRef } from "react";
import { languages } from "utils/constants";

const useLanguage = () => {
    const languageIconRef = useRef<HTMLDivElement>(null)

    const changeLanguage = (lang: string, i18n: i18n) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    }

    const showLanguageList = () => {
        languageIconRef.current?.classList.remove("hidden")
    }

    const isActiveLanguage = (lang: string): boolean => {
        return (localStorage.getItem("lang") || languages[0]?.code) == lang
    }
    return {languageIconRef, changeLanguage, showLanguageList, isActiveLanguage}
}

export default useLanguage