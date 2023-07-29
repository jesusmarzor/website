import { ArrowLeft } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export const BackButton = () => {
    const router = useRouter()
    const pathname = usePathname()
    const goToBack = () => {
        let pathNameArray = pathname.split("/")
        pathNameArray.pop()
        let pathNameString = pathNameArray.length === 1 ? "/" : pathNameArray.join("/")
        router.push(pathNameString)
    }
    return(
        <button onClick={ goToBack }>
            <ArrowLeft/>
        </button>
    )
}