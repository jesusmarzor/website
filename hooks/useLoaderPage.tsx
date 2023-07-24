import { useState } from "react"

export default () => {
    const [isShowed, setIsShowed] = useState<boolean>(true)
    return {isShowed, setIsShowed}
}