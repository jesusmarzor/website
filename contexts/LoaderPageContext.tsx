"use client"
import { createContext, useContext } from "react";
import useLoaderPage from "hooks/useLoaderPage";

interface props {
    children: JSX.Element
}

const loaderPageContext = createContext<any>(null);

export const LoaderPageProvider: React.FC<props> = ({children}) => {
    const loaderPage = useLoaderPage()
    return <loaderPageContext.Provider value={loaderPage}>{children}</loaderPageContext.Provider>
}

export const LoaderPageConsumer = () => {
    const context: any = useContext(loaderPageContext)
    return context
}