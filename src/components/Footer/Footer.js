import Link from 'next/link'
import Image from 'next/image';
import styles from './Footer.module.scss'

const  Footer = () => {
  return ( 
    <footer>
      <div className={styles.footer}>
        <p>Det här är inte en officiell sida från ridskolan, utan är skapad av en av hoppgrupperna 
        så att alla vi lätt kan se uppdaterad info om sadlarna &#128578;</p>
      </div>
    </footer>
   );
}
 
export default Footer;