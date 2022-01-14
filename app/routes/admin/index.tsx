import {Outlet, Link, useLoaderData} from 'remix'
import type {Post} from '~/post'

export default function AdminIndex() {
  return (
    <p>
      <Link to="new">Create a New Post</Link>
    </p>
  )
}
