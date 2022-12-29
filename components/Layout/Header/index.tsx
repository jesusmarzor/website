import { SocialNetworks } from "components/Layout/Header/SocialNetworks"
import { Navigation } from "components/Layout/Header/Navigation"
import Image from "next/image"
export const Header = () => {
    
    return(
        <header className="flex flex-col gap-10 w-72 min-h-screen fixed top-0 left-0 bg-gradient-to-tr from-black-default to-black-light">
            <div className="flex justify-center items-center w-48 h-48 mx-auto mt-14 rounded-full border-4 border-black-extra-light overflow-hidden bg-black">
                <Image
                src="/profile.png"
                alt="Picture of the author"
                width={300}
                height={300}
                priority
                />
            </div>
            <Navigation/>
            <SocialNetworks/>
        </header>
    )
}