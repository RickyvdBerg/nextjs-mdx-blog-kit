import React, { useRef, useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import tocbot from 'tocbot'

export default function BlogLayout({ children }) {
  const blog = useRef(null)

  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h1, h2, h3',
      hasInnerContainers: false,
      scrollSmooth: false,
      scrollSmoothDuration: 0,
      collapseDepth: 3,
    })

    return () => {
      tocbot.destroy()
    }
  }, [])

  return (
    <div className="container mx-auto flex flex-row mt-12 gap-2">
      <article
        className="blog-post js-toc-content 2 w-full lg:w-8/12"
        ref={blog}
      >
        <MDXProvider>{children}</MDXProvider>
      </article>
      <aside className="hidden lg:table sticky top-0 h-auto lg:w-4/12 px-12 pt-8">
        <h2 className="text-xl font-mono text-accent">TABLE OF CONTENTS</h2>
        <div className="js-toc table" />
      </aside>
    </div>
  )
}
