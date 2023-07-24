import i18next from "i18next"
import { useEffect, useState } from "react"
import supabase from "utils/supabase"

const useCV = () => {
    const [cv, setCV] = useState<string>("")
    useEffect(() => {
        supabase
        .storage
        .from('public/cvs')
        .download(`${i18next.language}.pdf`)
        .then( res => {
            try {
                let blob = res.data as Blob
                setCV(window.URL.createObjectURL(blob))
            } catch {}
        })
    }, [i18next.language])
    return cv
}

export default useCV