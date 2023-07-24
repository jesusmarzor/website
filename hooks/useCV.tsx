import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import supabase from "utils/supabase"

const useCV = () => {
    const { i18n } = useTranslation()
    const [cv, setCV] = useState<string>("")
    useEffect(() => {
        supabase
        .storage
        .from('public/cvs')
        .download(`${i18n.language}.pdf`)
        .then( res => {
            try {
                let blob = res.data as Blob
                setCV(window.URL.createObjectURL(blob))
            } catch {}
        })
    }, [i18n.language])
    return cv
}

export default useCV