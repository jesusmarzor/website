import React from "react";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown"
import CopyCode from "components/MarkdownCode/CopyCode";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import swift from "react-syntax-highlighter/dist/cjs/languages/prism/swift";
import dart from "react-syntax-highlighter/dist/cjs/languages/prism/dart";
import kotlin from "react-syntax-highlighter/dist/cjs/languages/prism/kotlin";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("swift", swift);
SyntaxHighlighter.registerLanguage("dart", dart);
SyntaxHighlighter.registerLanguage("kotlin", kotlin);

interface props {
    markdown: string
}

const MarkdownCode: React.FC<props> = ({markdown}) => {
    return <ReactMarkdown
        components={{
            code({ className, ...props }) {
            const hasLang = /language-(\w+)/.exec(className || "");
            return hasLang ? (
                <SyntaxHighlighter
                style={oneDark}
                language={hasLang[1]}
                PreTag="div"
                className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
                showLineNumbers={true}
                useInlineStyles={true}
                >
                {String(props.children).replace(/\n$/, "")}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props} />
            );
            },
            pre: (pre) => {
                const codeChunk = (pre as any).node.children[0].children[0].value as string;
                const language = 
                (pre as any).children.props.className.replace(
                /language-/g,
                ""
                ) as string;
            
                return (
                <div className="relative overflow-x-hidden">
                    <CopyCode textCopied={codeChunk}/>
                    <span
                    className="absolute right-3 bottom-10 rounded-xl text-xs tracking-wider uppercase text-black-default bg-white-default/50 backdrop-blur-sm px-2 py-1"
                    >
                    {language}
                    </span>
                    <pre {...pre}></pre>
                </div>
                );
            }
        }}
    >
    {markdown}
    </ReactMarkdown>
}

export default React.memo(MarkdownCode)