import Image from "next/image"
import React from "react"
import { Project as ProjectInterface } from "utils/interfaces"

const Project: React.FC<ProjectInterface> = ({image, title, description, url}) => {
    return(
        <li className="border border-black-default dark:border-white-default w-full minProject:w-86 mx-auto rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <a href={url} target="_blank">
                <Image
                    src={image}
                    width={1200}
                    height={1200}
                    alt={`${title} project`}
                    className="object-contain h-50"
                    priority={true}
                />
                <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p>{description}</p>
                </div>
            </a>
        </li>
    )
}

export default React.memo(Project, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});