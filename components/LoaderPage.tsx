import { LoaderPageConsumer } from "contexts/LoaderPageContext"
import Image from "next/image"

export const Loader: React.FC = () => {
    const { isShowed } = LoaderPageConsumer()
    return (
        <div className={`fixed top-0 bottom-0 left-0 right-0 bg-light-default dark:bg-black-default ${isShowed ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} flex justify-center items-center z-30 transition-opacity duration-500`}>
            <Image
            src="/img/loader.png"
            width={1200}
            height={1200}
            alt="Picture to loader page"
            className="object-contain w-24 animate-pulse"
            priority={true}
            />
        </div>
    )
}