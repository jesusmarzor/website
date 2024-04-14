import { Language, Menu, SocialNetwork } from "utils/interfaces";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Theme } from "./enums";

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

export const authorName = "Jesús Martín"
export const loaderString = "JMZ"

export const textLogo = {
    name: "Jesus",
    lastName: "marzor"
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
        titleKey: "common.blog",
        to: "blog"
    },
    {
        titleKey: "common.contact",
        to: "contact"
    }
]

export const mailRegex = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/

export const projectsUrl = "https://github.com/jesusmarzor"

export const socialNetworks: SocialNetwork[] = [
    {
        name: "Linkedin",
        icon: Linkedin,
        url: "https://linkedin.com/in/jesusmarzor"
    },
    {
        name: "Github",
        icon: Github,
        url: projectsUrl
    },
    {
        name: "Instagram",
        icon: Instagram,
        url: "https://instagram.com/jesusmarzor"
    }
]

export const themeDefault = Theme.dark

export const minDaysNewLabel: number = 3

export const maxNumCardsInHomeSections: number = 3