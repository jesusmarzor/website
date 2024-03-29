import { LanguageModalConsumer } from "contexts/LanguageModalContext"
import { useTranslation } from "react-i18next"
import { Languages } from "lucide-react"
import { languages } from "utils/constants"

export const LanguageIcon: React.FC = () => {
    const { t } = useTranslation()
    const {isShowedModal, setIsShowedModal, languageIconRef, changeLanguage, isActiveLanguage} = LanguageModalConsumer()
    
    return(
        <div className="relative">
            <Languages onClick={() => setIsShowedModal(true)}/>
            <div ref={languageIconRef} className={`absolute top-16 right-1 border border-white-default bg-white-default dark:border-black-extra-light dark:bg-black-default rounded cursor-default py-2 ${!isShowedModal && "hidden"}`}>
                <ul className="flex flex-col w-32 gap-2 z-10">
                    {
                        languages.map( lang => {
                            return (
                                <li key={lang.code}>
                                    <button className={`hover:text-orange-default dark:hover:bg-black-extra-light hover:bg-white-default w-full text-left pl-2 py-2 ${isActiveLanguage(lang.code) && "text-orange-default  pointer-events-none"}`} onClick={() => changeLanguage(lang.code)} title={lang.nameKey}>{t(lang.nameKey)}</button>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>
        </div>
    )
}