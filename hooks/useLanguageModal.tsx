import { i18n } from "i18next";
import { useRef, useState } from "react";
import { languages } from "utils/constants";

const useLanguageModal = () => {
    const [isShowedModal, setIsShowedModal] = useState<boolean>(false)
    const languageIconRef = useRef<HTMLDivElement>(null)

    const changeLanguage = (lang: string, i18n: i18n) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    }

    const isActiveLanguage = (lang: string): boolean => {
        return (localStorage.getItem("lang") || languages[0]?.code) == lang
    }
    
    return {isShowedModal, setIsShowedModal, languageIconRef, changeLanguage, isActiveLanguage}
}

export default useLanguageModal