import { i18n } from "i18next";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "utils/constants";

const useLanguageModal = () => {
    const [isShowedModal, setIsShowedModal] = useState<boolean>(false)
    const languageIconRef = useRef<HTMLDivElement>(null)
    const { i18n } = useTranslation()

    useEffect( () => {
        let currentLang = localStorage.getItem("lang")
        currentLang && i18n.changeLanguage(currentLang)
    }, [])

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    }

    const isActiveLanguage = (lang: string): boolean => (i18n.language || languages[0]?.code) == lang
    
    return {isShowedModal, setIsShowedModal, languageIconRef, changeLanguage, isActiveLanguage}
}

export default useLanguageModal