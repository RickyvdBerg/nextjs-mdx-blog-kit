import BaseLayout from '../components/layouts/BaseLayout'
import SearchLayout from '../components/layouts/BaseLayout'
import BlogLayout from '../components/layouts/BlogLayout'

export function renderLayout(props, state) {
  const { Component } = props
  const { postData } = state
  const { layout } = postData

  if (!layout || !props.router) return

  switch (layout) {
    case 'post':
      return (
        <BlogLayout>
          <Component {...props} postData={postData} />
        </BlogLayout>
      )
    default:
      return (
        <BaseLayout>
          <Component {...props} />
          {/* Put styled-jsx here */}
        </BaseLayout>
      )
  }
}
