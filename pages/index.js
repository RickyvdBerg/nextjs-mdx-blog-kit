import React from 'react'
import PostListingHome from '../components/PostListingHome'

function HomePage(props) {
  const blogPosts = props.allData.filter((content) => content.type == 'post')

  return (
    <div>
      <div className="flex flex-wrap md:flex-no-wrap justify-center gap-4 pb-20">
        <img
          className="lg:flex-shrink-0 rounded-full border-4 border-white h-40 w-40 max-w-lg"
          src="./static/images/profile.jpg"
        ></img>
        <h1 className="text-4xl font-bold self-center flex-grow">
          Hello, I'm Ricky. I am a Full-Stack developer with an interest in
          Security. 😎
        </h1>
      </div>
      <div className="pb-12">
        <h2 className="text-2xl text-accent font-mono font-bold">
          Latest blogs
        </h2>
        <div className="flex flex-col gap-3">
          {blogPosts.slice(0, 3).map((post, index) => {
            return (
              <>
                <PostListingHome key={index} post={post} indes={index} />
                <hr className="border-black border-opacity-25" />
              </>
            )
          })}
        </div>
      </div>
      {/* <div className="flex flew-row gap-4 pb-24 font-mono font-bold">
        <div>
          <h2 className="text-2xl text-accent">Latest Projects</h2>
        </div>
      </div> */}
    </div>
  )
}

export const meta = {
  title: 'HomePage',
  tags: ['Next.js', 'MDX'],
  layout: 'page',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription: 'This is an about page.',
}

export default HomePage
