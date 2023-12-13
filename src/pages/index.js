import Link from 'next/link'
import EQUIPMENTQ from '@/constants/saddles'
import Layout from '@/components/Layout/Layout'
import styles from './startpage.module.scss'


export default function Home() {
  return (
    <Layout>
      <div className={styles.startpageContainer}>
        <div className='switchPageLinkContainer'>
          <Link href="sadel-beskrivningar" className='switchPageLink'>Sadelbeskrivningar</Link>
        </div>
        <p className={styles.horseEmoji}>&#128014;</p>
        <table className={styles.saddleTable}>
          <thead>
            <tr>
              <th>Häst</th>
              <th>Utrustning</th>
            </tr>
          </thead>
          <tbody>
            {EQUIPMENTQ.map((horse, horseIndex) => (
              <>
                {horse.saddles.map((saddle, index) => (
                  <tr key={`${horse.horse}-saddle-${index}`} className={index === 0 ? styles.firstChoice : ''}>
                    <td>{index === 0 ? horse.horse : ''}</td>
                    <td>{saddle}</td>
                  </tr>
                ))}
                <tr className='smallDelimiter'></tr>
                {horse.girthLength && (
                  <tr key={`${horse.horse}-girth-${horseIndex}`} className={styles.smallerText}>
                    <td>{horse.girthLength.name}</td>
                    <td>{horse.girthLength.cm}</td>
                  </tr>
                )}
                {horse.other.map((item, index) => (
                  item.equipment.map((equip, equipIndex) => (
                    <tr key={`${horse.horse}-other-${equipIndex}`} className={styles.smallerText}>
                      <td>{index === 0 && equipIndex === 0 ? item.name : ''}</td>
                      <td>{equip}</td>
                    </tr>
                  ))
                ))}
                <tr className='delimiter'></tr>
              </>
            ))}
          </tbody>
        </table>
        <p className='infoText'>
          Sadeln som står först per häst är den som rekommenderas i första hand.
        </p>
        <div className='thinLine'></div>
        <p className='infoText'>
          Sadelgjordslängd =  den längd hästen oftast använder, men har sadeln du lånar redan en sadelgjord så testa den först.
        </p>
        <div className='thinLine'></div>
        <p className='infoText'>
          Kom gärna med ändringar eller tillägg till listan! <br/>
          Skicka ett sms till nummer 0736533933 med:
        </p>
        <ul className='infoText'>
          <li>Vilken utrustning som ska ändras/ läggas till/ tas bort</li>
          <li>Vilken/vilka hästar det gäller för</li>
          <li>Ditt namn</li>
          <li>Vilken ridlärare som godkänt ändringen</li>
        </ul>
      </div>
    </Layout>
  );
}
