import Head from 'next/head'
import NavBar from '../navbar'
import Footer from '../footer'
import styles from './Layout.module.scss'

const Layout = ({
  children,
  title = 'Moons chat challenge',
  footer = false
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <main className={`has-navbar-fixed-bottom ${styles.layout}`}>
        <NavBar />
        {children}
        {footer ? <Footer /> : null}
      </main>
    </>
  )
}
export default Layout
