"use client"
import { createContext, useContext } from "react";
import useModal from "hooks/useLanguageModal";

interface props {
    children: JSX.Element
}

const modalContext = createContext<any>(null);

export const LanguageModalProvider: React.FC<props> = ({children}) => {
    const modal = useModal()
    return <modalContext.Provider value={modal}>{children}</modalContext.Provider>
}

export const LanguageModalConsumer = () => {
    const context: any = useContext(modalContext)
    return context
}