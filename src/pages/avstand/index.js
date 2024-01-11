import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import styles from './avstand.module.scss'

const Distance = () => {
  return (
    <Layout>
      <div className={styles.distanceContainer}>
        <div className='switchPageLinkContainer'>
          <Link href="/" className='switchPageLink'>Tillbaka till hästar</Link>
          <br/>
          <Link href="/sadel-beskrivningar" className='switchPageLink'>Sadelbeskrivningar</Link>
        </div>
        <h1>Avstånd i meter: Häst</h1>
        <p className={styles.prioritizing}>Om avstånd står utskrivna på banskissen följs dom istället.</p>
        <table className={styles.distanceTable}>
          <tbody>
            <tr>
              <td>Från väggen</td>
              <td>2.2</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.distanceTable}>
          <tbody>
            <tr>
              <td>Travbommar</td>
              <td>1.2</td>
            </tr>
            <tr>
              <td>Upphöjda travbommar</td>
              <td>1.1</td>
            </tr>
            <tr>
              <td>Travbom framför hinder</td>
              <td>2.5</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.distanceTable}>
          <tbody>
            <tr>
              <td>Galoppbommar*</td>
              <td>3.1</td>
            </tr>
            <tr>
              <td>Upphöjda galoppbommar*</td>
              <td>3.2</td>
            </tr>
            <tr>
              <td colSpan="2" className={styles.smallerText}>
                * gäller både vanliga och framför hinder
              </td>
            </tr>
            <tr>
              <td>Galoppbom efter hinder</td>
              <td>3.5 från hinder till bom</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.distanceTable}>
          <tbody>
            <tr>
              <td>Studs</td>
              <td>3</td>
            </tr>
            <tr>
              <td>5,5:a</td>
              <td>Första hindret rids i trav, 5.5m till nästa</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.distanceTable}>
          <tbody>
            <tr>
              <td>Galoppsprång</td>
              <td>3.5</td>
            </tr>
            <tr>
              <td>Anridning i trav</td>
              <td>Avståndet efter travhindret görs 50cm kortare (även studs)</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.thinnerTable}>
        <thead>
          <tr>
            <th colSpan="2">Mellan hinder</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>6.5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>10</td>
            </tr>
            <tr>
              <td>3</td>
              <td>14</td>
            </tr>
            <tr>
              <td>4</td>
              <td>17.5</td>
            </tr>
            <tr>
              <td>5</td>
              <td>21</td>
            </tr>
            <tr>
              <td>6</td>
              <td>24.5</td>
            </tr>
            <tr>
              <td>7</td>
              <td>28</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Ny anridning</td>
            </tr>
          </tbody>
        </table>

        <p className={`infoText ${styles.smallerInfo}`}>
          Alla avstånd här är självklart bara uppskattningar och varierar 
          beroende på vilken häst man sitter på, hur breda/höga hindrena är 
          och allt möjligt annat 💁‍♀️
        </p>
        <p className='infoText'>
          Avstånden som står här är uppskattade för träning och hinder 
          lägre än en meter, vilket gör att dom är lite kortare än vad 
          man skulle se på exv en tävling.
        </p>
        
      </div>
    </Layout>
  )
}

export default Distance