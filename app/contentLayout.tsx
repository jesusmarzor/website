"use client"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { LanguageModalConsumer } from "contexts/LanguageModalContext"
import { MenuMobileConsumer } from "contexts/MenuMobileContext"

interface props {
    children: React.ReactNode
}

const Content: React.FC<props> = ({children}) => {
    const {isShowedModal: isShowLanguageModal, setIsShowedModal: setIShowLanguageModal} = LanguageModalConsumer()
    const {isShowedMenu, setIsShowedMenu} = MenuMobileConsumer()

    const didTapMain = () => {
        isShowLanguageModal && setIShowLanguageModal(!isShowLanguageModal)
        isShowedMenu && setIsShowedMenu(!isShowedMenu)
    }

    return (
        <main onClick={didTapMain} className="min-h-screen flex flex-col justify-between">
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}

export default Content