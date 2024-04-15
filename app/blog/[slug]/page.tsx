import { Metadata, ResolvingMetadata } from 'next'
import Post from 'app/blog/[slug]/post'
import { Post as PostInterface } from 'utils/interfaces'
import supabase from 'utils/supabase'
import { authorName, languages, textLogo } from 'utils/constants'
 
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata ({ params, }: Props, ): Promise<Metadata> {
  const slug = params.slug
  const languagesCode = languages.map( lng => lng.code)
  const { data, error } = await supabase
  .from('Posts')
  .select()
  .eq("lang", languagesCode[1])
  .eq("slug", slug)
  const post = (data as PostInterface[])[0]
  return {
    openGraph: {
      title: post?.title ?? "",
      description: `written by ${authorName} (${textLogo.name}${textLogo.lastName})`,
      images: [
        post?.image ?? ""
      ]
    },
    twitter: {
      title: post?.title ?? "",
      description: `written by ${authorName} (${textLogo.name}${textLogo.lastName})`,
      images: [
        post?.image ?? ""
      ]
    }
  }
}
export default Post