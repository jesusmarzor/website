"use client"
import { Header } from "components/Header"
import { LanguageModalConsumer } from "contexts/LanguageModalContext"

interface props {
    children: React.ReactNode
}

const Content: React.FC<props> = ({children}) => {
    const {isShowedModal, setIsShowedModal} = LanguageModalConsumer()
    return (
        <main onClick={() => {isShowedModal && setIsShowedModal(!isShowedModal)}}>
            <Header/>
            {children}
        </main>
    )
}

export default Content