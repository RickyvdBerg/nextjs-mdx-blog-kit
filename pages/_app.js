import App, { Container } from 'next/app'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { Navigation } from '../components/Navigation'
import { createSEOConfig } from '../utils/seo'
import getPostData from '../utils/get-post-data'
import BlogEngine from '../utils/blog-engine'
import { renderLayout } from '../utils/render-app-layout'
import Footer from '../components/Footer'
import { checkForSW } from '../utils/check-for-sw'
import '../styles/index.css'

import { ThemeProvider } from '../themeContext'

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = { postData: props.postData }
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const [allData, postData] = await Promise.all([
      BlogEngine(),
      getPostData(router),
    ]).catch((error) =>
      console.error('Error in _app.js getInitialProps()', error)
    )

    const propsObj = Object.assign({}, { postData, allData, ...pageProps })

    return { ...propsObj }
  }

  async componentDidMount() {
    await checkForSW()
  }

  async componentDidUpdate(prevProps, prevState) {
    const postData = await getPostData(this.props.router)
    if (!prevState.postData || postData.name !== this.state.postData.name) {
      this.setState({ postData })
    }
  }

  render() {
    const { postData } = this.state

    const seoData = createSEOConfig(postData)
    if (postData) {
      const tagsString = postData.tags.join(', ')
      return (
        <>
          <div
            className="absolute object-fill w-4/6 min-h-full h-32 max-h-32 text-secondary"
            style={{ zIndex: '-1' }}
          >
            <svg
              version="1.1"
              id="Layer_1"
              viewBox="0 0 1145.85 137.86"
              preserveAspectRatio="none"
              className="w-full min-h-32 h-32 text-inverse-secondary fill-current"
            >
              <path
                d="M0,137.9c0,0,128.4-33.8,273.9-36.1c129.8-0.8,203.5,7.8,299,21.4c95.5,13.8,191,12,286.5-8.1
	c95.5-20.5,191-67.4,238.7-91.4L1145.8,0l0,0h-47.7c-47.7,0-143.2,0-238.7,0s-191,0-286.5,0s-191,0-286.5,0S95.5,0,47.7,0H0V137.9z"
              />
            </svg>
            {/* <svg
              src="./static/images/wave.svg"
              className="w-full min-h-32 h-32 fill-secondary"
              id="wave"
            /> */}
          </div>

          {/* (1) SEO  */}
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content={tagsString} />
          </Head>
          <NextSeo config={seoData} />

          <ThemeProvider>
            <Navigation />
            {/* (2) navigation */}
            <div className="z-10 container pt-20 m-auto px-10 sm:px-8 md:px-20 max-w-screen-xl">
              <div className="flex flex-col justify-between h-full">
                <div className="">
                  <React.Fragment>
                    {renderLayout(this.props, this.state)}
                  </React.Fragment>
                </div>
                <div>
                  <Footer />
                </div>
              </div>
            </div>
          </ThemeProvider>
        </>
      )
    } else {
      return null
    }
  }
}
