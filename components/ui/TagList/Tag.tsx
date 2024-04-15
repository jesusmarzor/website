interface props {
    text: string
    color?: string
}

export const Tag: React.FC<props> = ({text, color}) => {
    return <li style={{backgroundColor: color}} className={`rounded-full flex justify-center items-center py-1 px-2 text-xs bg-orange-default text-white-default`}>{text}</li>
}