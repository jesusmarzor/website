import { LucideIcon } from "lucide-react"

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
}

export interface FormErrors {
    name?: string
    email?: string
    message?: string
}

export interface SocialNetwork {
    icon: LucideIcon,
    url: string
}

export interface Post {
    slug: string
    title: string
    date: Date
    tag: string
    image: string
    markdown: string
    lang: string
    readingTime: number
}

export interface Loader {
    type: LoaderType
    isShowed: boolean
}

export enum LoaderType {
    projects, posts
}

export interface LoaderPageReturn {
    loaderIsShowed: () => boolean
    hideLoader: (type: LoaderType) => void
    isLoadingTypeShowed: (type: LoaderType) => boolean
}