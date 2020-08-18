import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({
  children,
  pageTitle = 'Next.js Static Starter',
  ...props
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
