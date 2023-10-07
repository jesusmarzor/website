import { useEffect } from "react";

const useWindowTop = () => {
    useEffect( () => {
        window.scroll({
            top: 0,
            left: 0
        });
    }, [])
}

export default useWindowTop