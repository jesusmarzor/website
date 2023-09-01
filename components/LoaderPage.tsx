import { LoaderPageConsumer } from "contexts/LoaderPageContext"
import { loaderString } from "utils/constants"

export const Loader: React.FC = () => {
    const { loaderIsShowed } = LoaderPageConsumer()
    return (
        <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black-default ${loaderIsShowed() ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} flex justify-center items-center z-30 transition-opacity duration-500`}>
            <p className="text-6xl font-bold text-orange-default animate-bounce">{loaderString}</p>
        </div>
    )
}