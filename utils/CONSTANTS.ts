import { Language, Menu } from "utils/interfaces";

export const languages: Language[] = [
    {
        nameKey: "language.spanish.name",
        code: "es"
    },
    {
        nameKey: "language.english.name",
        code: "en"
    },
]

export const authorName = {
    name: "Jesús",
    lastName: "Martín"
}

export const menuList: Menu[] = [
    {
        titleKey: "common.home",
        to: "home"
    },
    {
        titleKey: "common.aboutMe",
        to: "aboutMe"
    },
    {
        titleKey: "common.projects",
        to: "projects"
    },
    {
        titleKey: "common.contact",
        to: "contact"
    }
]