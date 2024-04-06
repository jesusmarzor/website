import React, { useState } from "react";
import { Check, File } from "lucide-react";
import CopyToClipboard from "react-copy-to-clipboard";

interface props {
    textCopied: string
}

const CopyCode: React.FC<props> = ({textCopied}) => {
    const [isCopy, setIsCopy] = useState<Boolean>(false);
    return  isCopy
    ? <Check
    className="absolute right-3 top-10 w-5 h-5 text-white-default/40"
    />
    :
    <button
        className="absolute right-3 top-10"
    >
        <CopyToClipboard
        text={textCopied}
        onCopy={ async () => {
            setIsCopy(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsCopy(false);
        }}
        >
        <File className="h-5 w-5 cursor-pointer text-white-default/40 hover:text-orange-default" />
        </CopyToClipboard>
    </button>
}

export default React.memo(CopyCode)