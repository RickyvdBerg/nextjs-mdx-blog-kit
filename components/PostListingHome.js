import React from 'react'
import Link from 'next/link'
import TagBlock from './Tags'

export default function PostListingHome(props) {
  const { post, index } = props
  const date = new Date(post.publishDate)
  const test = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
  return (
    <Link href={`/blog/${post.name}`} key={`post-list-${index}`} className="">
      <div className="hover:bg-secondary items-center cursor-pointer rounded -mx-3 -my-1 px-3 py-2">
        <div className="flex flex-row justify-between">
          <p key={`${post.name}-headline`} className="text-primary">
            <h3 className="font-mono text-lg font-medium">{post.title}</h3>
          </p>
          <p>{test}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-mono text-sm font-medium text-secondary opacity-75">
            {post.seoDescription}
          </p>
          <TagBlock tags={post.tags} />
        </div>
      </div>
    </Link>
  )
}
