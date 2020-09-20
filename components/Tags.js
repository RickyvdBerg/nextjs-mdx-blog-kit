import React from 'react'
import Link from 'next/link'

function tagMaker(tagList) {
  let alphabetizedTags = tagList.sort()

  const isLastOrFirst = (index) => {
    if (alphabetizedTags.length === 2 && index === 0) {
      return false
    } else if (
      alphabetizedTags.length === 0 ||
      index === alphabetizedTags.length - 1
    ) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="flex">
      <span className="text-secondary"></span>
      {alphabetizedTags.map((tag, index) => (
        <Link key={`${tag}-link`} href={`/search?q=${tag}`}>
          <a
            key={tag}
            className={`px-2 rounded-full bg-accent text-xs text-inverse align-middle ${
              isLastOrFirst(index) ? 'mr-0' : 'mr-2'
            } `}
            style={{ paddingTop: '0.12rem', paddingBottom: '0.12rem' }}
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
