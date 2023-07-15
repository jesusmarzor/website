"use client"
import { createContext, useContext } from "react";
import useMenuMobile from "hooks/useMenuMobile";

interface props {
    children: JSX.Element
}

const menuMobileContext = createContext<any>(null);

export const MenuMobileProvider: React.FC<props> = ({children}) => {
    const menuMobile = useMenuMobile()
    return <menuMobileContext.Provider value={menuMobile}>{children}</menuMobileContext.Provider>
}

export const MenuMobileConsumer = () => {
    const context: any = useContext(menuMobileContext)
    return context
}