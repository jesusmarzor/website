"use client"
import { PostsConsumer } from "contexts/PostsContext"
import { BackButton } from "components/ui/BackButton"
import useWindowTop from "hooks/useWindowTop"
import { authorName, textLogo } from "utils/constants"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import ReactMarkdown from "react-markdown"
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import swift from "react-syntax-highlighter/dist/cjs/languages/prism/swift";
import dart from "react-syntax-highlighter/dist/cjs/languages/prism/dart";
import kotlin from "react-syntax-highlighter/dist/cjs/languages/prism/kotlin";
import CopyCode from "components/ui/MarkdownCode/CopyCode"

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("swift", swift);
SyntaxHighlighter.registerLanguage("dart", dart);
SyntaxHighlighter.registerLanguage("kotlin", kotlin);

interface Params {
    slug: string
}

interface props {
    params: Params
}

const Post: React.FunctionComponent<props> = ({params})  => {
    useWindowTop()
    const post = PostsConsumer().filter( ({slug}) => slug === params.slug)[0]
    return (
        <>
        <title>{`${post?.title ?? "Blog"} - ${textLogo.name}${textLogo.lastName}`}</title>
        <meta name="description" content={`Article about: ${post?.title ?? "programming"}, written by ${authorName} (${textLogo.name}${textLogo.lastName}), web and iOS developer.`}/>
        <section className="max-w-7xl mx-auto overflow-hidden pt-32 pb-10 px-5 md:px-10 w-full">
          <BackButton/>
          {
            post &&
            <>
            <h2 className="font-bold text-5xl text-center mt-10 py-5">{post?.title}</h2>
            <div className="prose max-w-3xl dark:prose-invert mx-auto">
            <ReactMarkdown
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
                  {post.markdown}
                  </ReactMarkdown>
              </div>
              </>
          }
        </section>
        </>
    )
}

export default Post