import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {

  const router = useRouter();
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

  return ( 
    <>
      <nav className={styles.navbar}>
        <Link 
          href="/"
          aria-label="Gå till startsidan"
        >
          <img 
            src="/images/logo.png"
            className={styles.logo}
            alt="Färgglad ikon som ser ut som ett G och ler"
          />
        </Link>
        <ul className={styles.navbarMenu}>
          <li><Link href="/grits" className={router.pathname == "/grits" ? styles.activePage  : ''}>Grits</Link></li>
          <li><Link href="/get-started" className={router.pathname == "/get-started" ? styles.activePage  : ''}>Kom igång</Link></li>
          <li><Link href="/tips" className={router.pathname == "/tips" ? styles.activePage  : ''}>Tips</Link></li>
          <li><Link href="/about-us" className={router.pathname == "/about-us" ? styles.activePage  : ''}>Om oss</Link></li>
          <li><Link href="/contact" className={router.pathname == "/contact" ? styles.activePage  : ''}>Kontakt</Link></li>
        </ul>
      </nav>
      <nav className={styles.mobileNavbar}>
        <ul className={styles.mobileNavbarMenu}>
          <li>
            <Link
              href="/"
              aria-label="Gå till startsidan"
            >
              <img 
                src="/images/logo.png"
                className={styles.logo}
                alt="Färgglad ikon som ser ut som ett G och ler"
              />
            </Link>
          </li>
          <li>
            <div className={styles.burgerMenu} onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </li>
        </ul>
        {toggleMobileMenu && (
          <ul className={styles.mobileMenu}>
            <li><Link href="/" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>Hem</Link></li>
            <li><Link href="/grits" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>Grits</Link></li>
            <li><Link href="/get-started" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>Kom igång</Link></li>
            <li><Link href="/tips" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>Tips</Link></li>
            <li><Link href="/about-us" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>Om oss</Link></li>
            <li><Link href="/contact" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>Kontakt</Link></li>
          </ul>
        )}
      </nav>
    </>
   );
}
 
export default Navbar