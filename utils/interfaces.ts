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