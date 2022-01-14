import {Link, Outlet, useLoaderData} from 'remix'
import {getPosts} from '~/post'
import adminStyles from '~/styles/admin.css'
import type {Post} from '~/post'

export const links = () => [{rel: 'stylesheet', href: adminStyles}]

export const loader = () => getPosts()

export default function Admin() {
  const posts = useLoaderData<Post[]>()
  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map(({slug, title}) => (
            <li key={slug}>
              <Link to={`/posts/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
