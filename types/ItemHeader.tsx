import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { SECTIONS } from "enums/SECTIONS"

export default interface ItemHeader {
    icon: IconDefinition
    text: string
    section: SECTIONS
}