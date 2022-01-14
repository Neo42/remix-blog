import {useLoaderData} from 'remix'
import type {LoaderFunction} from 'remix'
import {getPost} from '~/post'
import invariant from 'tiny-invariant'

export const loader: LoaderFunction = async ({params: {slug}}) => {
  invariant(slug, 'expected params.slug')
  return getPost(slug)
}

export default function PostSlug() {
  const {html} = useLoaderData()
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  )
}
