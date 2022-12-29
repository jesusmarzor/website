import { useEffect, useState } from "react"
import { faContactBook, faFolder, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import ItemHeader from "types/ItemHeader"
import useTranslation from "next-translate/useTranslation"
import { SECTIONS } from "enums/SECTIONS"

export default () => {
    const { t } = useTranslation("common")
    const [items, setItems] = useState<ItemHeader[]>()

    useEffect( () => {
        setItems([
            {
                icon: faHome,
                text: t("home"),
                section: SECTIONS.HOME
            },
            {
                icon: faUser,
                text: t("about-me"),
                section: SECTIONS.ABOUT_ME
            },
            {
                icon: faFolder,
                text: t("projects"),
                section: SECTIONS.PROJECTS
            },
            {
                icon: faContactBook,
                text: t("contact"),
                section: SECTIONS.CONTACT
            }
        ])
    }, [])

    return { items }
}