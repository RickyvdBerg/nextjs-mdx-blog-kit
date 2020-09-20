import React, { Component } from 'react'
import TagBlock from '../components/Tags'
import ReadingProgress from '../components/ReadingProgress'
import { articleSEO } from '../utils/seo'
import { formatDisplayDate } from '../utils/formatters'

export default class BlogMeta extends Component {
  renderProgressBar = (postData) => {
    return postData.hideProgressBar ? null : <ReadingProgress />
  }

  render() {
    const { postData } = this.props.data
    const { formattedPublishDate } = postData

    return (
      <div className="mb-8">
        {this.renderProgressBar(postData)}
        <div className="flex flex-row pt-2">
          <small className="post-date">
            {formatDisplayDate(formattedPublishDate)}
          </small>
          <div className="w-1 h-1 bg-inverse rounded-full mx-2 self-center" />
          <small className="post-read-time text-tertiary">10 min read</small>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
          {postData.title}
        </h1>
        <TagBlock tags={postData.tags} />

        {articleSEO(postData)}
      </div>
    )
  }
}
