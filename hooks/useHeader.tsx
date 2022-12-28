import { useEffect, useState } from "react"
import { faComment, faContactBook, faFolder, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import ItemHeader from "types/ItemHeader"
import useTranslation from "next-translate/useTranslation"

export default () => {
    const { t } = useTranslation("common")
    const [items, setItems] = useState<ItemHeader[]>()

    useEffect( () => {
        setItems([
            {
                icon: faHome,
                text: t("home"),
                section: "home"
            },
            {
                icon: faUser,
                text: t("about-me"),
                section: "about-me"
            },
            {
                icon: faFolder,
                text: t("projects"),
                section: "projects"
            },
            {
                icon: faComment,
                text: t("blog"),
                section: "blog"
            },
            {
                icon: faContactBook,
                text: t("contact"),
                section: "contact"
            }
        ])
    }, [])

    return { items }
}