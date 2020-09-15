import React from 'react'
import Link from 'next/link'

function tagMaker(tagList) {
  let alphabetizedTags = tagList.sort()
  return (
    <div className="">
      <span className="text-secondary"></span>
      {alphabetizedTags.map((tag) => (
        <Link key={`${tag}-link`} href={`/search?q=${tag}`}>
          <a
            key={tag}
            className="px-2 py-1 rounded-full bg-accent text-xs ml-2 text-inverse align-middle"
          >
            {tag}
          </a>
        </Link>
      ))}
    </div>
  )
}

const TagBlock = (props) => {
  if (!props.tags || !Array.isArray(props.tags)) return null
  return tagMaker(props.tags)
}

export default TagBlock
