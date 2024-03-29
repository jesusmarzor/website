import { LucideIcon } from "lucide-react"
import { LoaderType } from "./enums"

export interface Language {
    nameKey: string
    code: string
}

export interface Menu {
    titleKey: string
    to: string 
}

export interface Project {
    id: number
    title: string
    description: string
    url: string
    image: string
    tags: string[]
    featured: boolean
    color: string
}

export interface FormErrors {
    name?: string
    email?: string
    message?: string
}

export interface SocialNetwork {
    name: string,
    icon: LucideIcon,
    url: string
}

export interface Post {
    id: number
    slug: string
    title: string
    date: string
    tags: string[]
    image: string
    markdown: string
    lang: string
    readingTime: number
}

export interface Loader {
    type: LoaderType
    isShowed: boolean
}

export interface LoaderPageReturn {
    loaderIsShowed: () => boolean
    hideLoader: (type: LoaderType) => void
    isLoadingTypeShowed: (type: LoaderType) => boolean
}