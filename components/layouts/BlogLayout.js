import React from 'react'

export default ({ children }) => {
  console.log(children)
  return (
    <div className="container mx-auto flex flex-row mt-12 gap-2">
      <div className="blog-post">{children}</div>
      <div></div>
    </div>
  )
}
