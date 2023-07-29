import Link from "next/link"
import { LanguageIcon } from "components/Header/LanguageIcon"
import { ThemeIcon } from "./ThemeIcon"
import { textLogo } from "utils/constants"
import { MenuList } from "./MenuList"
import { Menu, X } from "lucide-react"
import { MenuMobileConsumer } from "contexts/MenuMobileContext"
import { usePathname } from 'next/navigation'

export const Header: React.FC = () => {

    const {isShowedMenu, didTapMenuIcon} = MenuMobileConsumer()
    const pathname = usePathname()
    return(
        <header className="fixed w-full p-6 bg-white-default dark:bg-black-light z-20">
            <nav className="flex justify-between items-center gap-4 max-w-7xl mx-auto">
                <h1 className="mr-auto">
                    <Link href="/" rel="preload" className="text-2xl">
                        <span className="font-bold">{textLogo.name}</span>{textLogo.lastName}
                    </Link>
                </h1>
                {
                    pathname === '/' &&
                    <MenuList classesName={`mr-auto fixed w-80 md:w-auto right-0 top-28 bottom-8 z-10 rounded-bl-xl rounded-tl-xl flex flex-col justify-center items-center gap-16 text-2xl md:text-base md:static md:flex-row md:gap-4 ${isShowedMenu ? "translate-x-0"  : "translate-x-80"} bg-white-default dark:bg-black-light border md:border-0 border-black-extra-light md:translate-x-0 transition-transform duration-500`}/>
                }
                <ThemeIcon/>
                <LanguageIcon/>
                {
                    pathname === '/' &&
                    (
                        isShowedMenu ?
                        <X className="md:hidden" onClick={didTapMenuIcon}/> :
                        <Menu className="md:hidden" onClick={didTapMenuIcon}/>
                    )
                }
            </nav>
        </header>
    )
}