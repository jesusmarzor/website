import { useRef } from "react";

const useThemeIcon = () => {
    const iconRef = useRef<HTMLDivElement>(null)
    const isDark = () => localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === null

    const didTapThemeIcon = () => {
        let sunIcon: HTMLDivElement = iconRef?.current?.firstChild as HTMLDivElement
        let moonIcon: HTMLDivElement = iconRef.current?.lastChild as HTMLDivElement
        if (isDark()) {
            moonIcon.classList.remove("hidden")
            sunIcon.classList.add("hidden")
            localStorage.setItem("theme", "light")
            document.documentElement.classList.remove('dark');
        } else {
            sunIcon.classList.remove("hidden")
            moonIcon.classList.add("hidden")
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add('dark');
        }
    }
    
    return {isDark, iconRef, didTapThemeIcon}
}

export default useThemeIcon