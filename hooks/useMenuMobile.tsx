import { useRef, useState } from "react";

const useMenuMobile = () => {
    const [isShowedMenu, setIsShowedMenu] = useState<boolean>(false)
    const menuIconRef = useRef<HTMLDivElement>(null)

    const didTapMenuIcon = () => {
        setIsShowedMenu(!isShowedMenu)
    }

    return {isShowedMenu, setIsShowedMenu, menuIconRef, didTapMenuIcon}
}

export default useMenuMobile