import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import PostListingHome from '../components/PostListingHome'

export const meta = {
  title: 'Search',
  tags: ['javascript', 'python'],
  layout: 'page',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription: 'This page lists all posts with a given tag.',
}

export default function Search(props) {
  const renderListItems = (posts) => {
    const tagTopic = props.router.query.q

    const items = posts
      .filter((post) => post.tags.includes(tagTopic))
      .map((post, index) => (
        <PostListingHome key={index} post={post} index={index} />
      ))

    if (items.length) {
      return items
    } else {
      return <h2 key="not-found-headline">No results</h2>
    }
  }
  const blogPosts = props.allData.filter((content) => content.type == 'post')
  return (
    <BaseLayout>
      <h1>
        Posts tagged: <span>{props.router.query.q}</span>
      </h1>
      {renderListItems(blogPosts)}
    </BaseLayout>
  )
}
Search.defaultProps = {
  allData: [],
}
