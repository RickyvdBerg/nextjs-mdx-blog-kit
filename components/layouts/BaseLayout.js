import React from 'react'

export default function BaseLayout({ children }) {
  return (
    <div id="base-layout" className="container mx-auto mt-16">
      {children}
    </div>
  )
}
