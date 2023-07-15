import Link from "next/link"
import { LanguageIcon } from "components/Header/LanguageIcon"
import { ThemeIcon } from "./ThemeIcon"
import { authorName } from "utils/constants"
import { MenuList } from "./MenuList"

export const Header: React.FC = () => {
    return(
        <header className="fixed w-full p-6 bg-white dark:bg-black-light">
            <nav className="flex justify-between items-center gap-4 max-w-7xl mx-auto">
                <Link href="/" rel="preload" className="text-2xl mr-auto">
                    <span className="font-bold">{authorName.name}</span> {authorName.lastName}
                </Link>
                <MenuList/>
                <ThemeIcon/>
                <LanguageIcon/>
            </nav>
        </header>
    )
}