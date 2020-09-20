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
    <Link href={`/blog/${post.name}`} key={`post-list-${index}`}>
      <div className="hover:bg-secondary items-center cursor-pointer rounded -mx-3 -my-1 px-3 py-2 flex flex-col md:flex-row flex-wrap">
        <div className="flex flex-col justify-between md:w-2/3 w-full">
          <h3
            key={`${post.name}-headline`}
            className="text-primary font-mono text-lg font-medium"
          >
            {post.title}
          </h3>
          <p className="font-mono font-sm text-secondary opacity-75 leading-none">
            {post.seoDescription}
          </p>
        </div>
        <div className="flex flex-row-reverse h-full md:flex-col md:gap-2 justify-between md:w-1/3 w-full align-items-center self-end mt-2 md:mt-0">
          <p className="font-mono text-xs font-medium text-accent opacity-75 md:self-end">
            {test}
          </p>
          <div className="flex md:self-end ">
            <TagBlock tags={post.tags} />
          </div>
        </div>
      </div>
    </Link>
  )
}
