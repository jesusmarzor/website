import { useState } from "react"
import { Loader, LoaderPageReturn } from "utils/interfaces"
import { LoaderType } from "utils/enums"

export const useLoaderPage = (): LoaderPageReturn => {
    const [loaders, setLoaders] = useState<Loader[]>([
        {
            type: LoaderType.projects,
            isShowed: true
        },
        {
            type: LoaderType.posts,
            isShowed: true
        }
    ])

    const loaderIsShowed = (): boolean => {
        return loaders.filter( ({isShowed}) => isShowed).length !== 0
    }

    const hideLoader = (type: LoaderType) => {
        setLoaders( prev => prev.map( loader => {
            if (loader.type === type) {
                let newLoader = loader
                loader.isShowed = false
                return newLoader
            }
            return loader
        }))
    }

    const isLoadingTypeShowed = (type: LoaderType): boolean => {
        return loaders.filter( ({type: loaderType}) => loaderType === type)[0].isShowed
    }

    return {loaderIsShowed, hideLoader, isLoadingTypeShowed}
}

export default useLoaderPage