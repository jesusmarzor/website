import { useEffect, useState } from "react";
import { themeDefault } from "utils/constants";
import { Theme } from "utils/enums";

const useThemeIcon = () => {
    const [theme, setTheme] = useState<string>(themeDefault)

    useEffect( () => {
        let currentMode = localStorage.getItem("theme") ?? themeDefault
        currentMode === Theme.dark  && document.documentElement.classList.add(Theme.dark)
        currentMode !== themeDefault && setTheme(currentMode)
    }, [])

    const didTapThemeIcon = () => {
        let nextTheme = theme === Theme.dark ? Theme.light : Theme.dark
        localStorage.setItem("theme", nextTheme)
        setTheme(nextTheme)
        document.documentElement.classList.toggle(Theme.dark);
    }
    
    return {theme, didTapThemeIcon}
}

export default useThemeIcon