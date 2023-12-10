import Head from 'next/head'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from './Layout.module.scss'

const Layout = ({ children, description, title, }) => {
  return ( 
    <>
      <Head>
        <meta charSet="UTF-8" />
        {title ? (
          <>
            <title>{title} | Hoppsadlar</title>
            <meta 
              name="description"
              content={description}
            />
          </>
          ) : (
          <>
            <title>ERS Hoppsadlar</title>
            <meta 
              name="description"
              content="Hitta rätt hoppsadel"
            />
          </>
        )}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#0092A2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.surroundingContainer}>
        <Header />
          <main className={styles.surroundAllPages}>
            {children}
          </main>
        <Footer />
      </div>
    </>
   );
}
 
export default Layout