import useThemeIcon from "hooks/useThemeIcon"
import { Moon, Sun } from "lucide-react"

export const ThemeIcon: React.FC = () => {
    const {isDark, iconRef, didTapThemeIcon} = useThemeIcon()
    
    return(
        <div ref={iconRef} onClick={didTapThemeIcon}>
            <Sun className={`${!isDark() && "hidden"}`}/>
            <Moon className={`${isDark() && "hidden"}`}/>
        </div>
    )
}