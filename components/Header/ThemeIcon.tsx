import useThemeIcon from "hooks/useThemeIcon"
import { Moon, Sun } from "lucide-react"
import { Theme } from "utils/enums"

export const ThemeIcon: React.FC = () => {
    const {theme, didTapThemeIcon} = useThemeIcon()
    
    return(
        <button onClick={didTapThemeIcon} title={theme}>
            {
                theme === Theme.dark ?
                <Sun/> :
                <Moon/>
            }
        </button>
    )
}