"use client"
import { LanguageModalConsumer } from "contexts/LanguageModalContext"
import { useTranslation } from "react-i18next"
import { FaLanguage } from "react-icons/fa"
import { languages } from "utils/constants"

export const LanguageIcon: React.FC = () => {
    const { t, i18n } = useTranslation()
    const {isShowedModal, setIsShowedModal, languageIconRef, changeLanguage, isActiveLanguage} = LanguageModalConsumer()
    
    return(
        <div className="relative">
            <FaLanguage onClick={() => setIsShowedModal(true)} className="text-4xl"/>
            <div ref={languageIconRef} className={`absolute top-16 right-1 border border-black-extra-light bg-black-default rounded cursor-default py-2 ${!isShowedModal && "hidden"}`}>
                <ul className="flex flex-col w-32 gap-2 z-10">
                    {
                        languages.map( lang => {
                            return (
                                <li key={lang.code}>
                                    <button className={`hover:text-orange-default hover:bg-black-extra-light w-full text-left pl-2 py-2 ${isActiveLanguage(lang.code) && "text-orange-default  pointer-events-none"}`} onClick={() => changeLanguage(lang.code, i18n)}>{t(lang.nameKey)}</button>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>
        </div>
    )
}