import {Link, useLoaderData} from 'remix'
import {getPosts} from '~/post'
import type {Post} from '~/post'

export const loader = () => getPosts()

export default function Posts() {
  const posts = useLoaderData<Post[]>()
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(({slug, title}) => (
          <li key={slug}>
            <Link to={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
