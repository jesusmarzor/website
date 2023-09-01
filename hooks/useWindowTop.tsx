import { useEffect } from "react";

const useWindowTop = () => {
    useEffect( () => {
        window.scroll(0, 0);
    }, [])
}

export default useWindowTop