import { Link } from "react-scroll"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useHeader from "hooks/useHeader"

export const Header = () => {
    const {items} = useHeader()
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
            <ul className="flex flex-col justify-center items-start w-full">
            {
                items?.map( (item) => {
                    return (
                        <li key={item.text}>
                            <Link to={item.section} activeClass="Link__active" spy={true} smooth={true} offset={0} duration={800} className="flex justify-start gap-2 items-center tracking-wider w-full pl-16 py-4 uppercase cursor-pointer">
                                <FontAwesomeIcon className="Icon w-5" icon={item.icon}/>
                                {item.text}
                            </Link>
                        </li>
                    )
                })
            }
            </ul>
        </header>
    )
}