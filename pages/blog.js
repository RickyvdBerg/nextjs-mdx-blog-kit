import React from 'react'
import PostListing from '../components/PostListing'
import PostListingHome from '../components/PostListingHome'

export const meta = {
  title: 'Blog',
  tags: ['Next.js', 'MDX'],
  layout: 'blog-post-list',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription:
    'I blog about anything that is related to development, ranging from tutorials to rants.',
}

export default function Blog(props) {
  const blogPosts = props.allData.filter((content) => content.type == 'post')
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-accent font-mono font-bold">{meta.title}</h2>
      <p className="text-lg text-primary mb-8">{meta.seoDescription}</p>
      <div className="flex flex-col gap-3">
        {blogPosts.map((post, index) => (
          <>
            <PostListingHome key={index} post={post} indes={index} />
            <hr className="border-black border-opacity-25" />
          </>
        ))}
      </div>
    </div>
  )
}
Blog.defaultProps = {
  allData: [],
}
