import React from 'react'
import Link from 'next/link'
import EQUIPMENT from '@/constants/saddles'
import Layout from '@/components/Layout/Layout'
import styles from './startpage.module.scss'

export default function Home() {
  return (
    <Layout>
      <div className={styles.startpageContainer}>
        <div className='switchPageLinkContainer'>
          <Link href="sadel-beskrivningar" className='switchPageLink'>Sadelbeskrivningar</Link>
          <br/>
          <Link href="avstand" className='switchPageLink'>Avstånd</Link>
        </div>
        <p className={styles.horseEmoji}>&#128014;</p>
        <div className='attention'>
          <table className={styles.miniTable}>
            <thead>
              <tr><th colSpan={2}>ALONSO</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>*Använd INTE padd till Alonsos nya sadel - den behöver forma sig 🙂</td>
              </tr>
              <tr>
                <td style={{ fontSize: '12px'}}>2025-09-15</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.shortningExplanations}>
          <p>
            HK = HoppKammaren<br/>
            HS = Hammarström
          </p>
        </div>
          
        <table className={styles.saddleTable}>
          <thead>
            <tr>
              <th>Häst</th>
              <th>Utrustning</th>
              <th className={styles.locationHeader}>Plats</th>
            </tr>
          </thead>
          <tbody>
            {EQUIPMENT.map((horse, horseIndex) => {
              return (
                <React.Fragment key={`horse-${horseIndex}`}>
                  {horse.saddles.map((saddleObj, index) => {
                    return (
                      <tr key={`${horse.horse}-saddle-${index}`} className={index === 0 ? styles.firstChoice : ''}>
                        <td>{index === 0 ? horse.horse : ''}</td>
                        <td>{saddleObj.saddle}</td>
                        <td className={styles.locationColumn}>{saddleObj.location}</td>
                      </tr>
                    )
                  })}
                  <tr className='smallDelimiter'></tr>
                  {horse.girthLength && (
                    <tr key={`${horse.horse}-girth-${horseIndex}`} className={styles.smallerText}>
                      <td>{horse.girthLength.name}</td>
                      <td>{horse.girthLength.cm}</td>
                      <td></td>
                    </tr>
                  )}
                  {horse.other.map((item, itemIndex) => (
                    item.equipment.map((equip, equipIndex) => (
                      <tr key={`${horse.horse}-other-${itemIndex}-${equipIndex}`} className={styles.smallerText}>
                        <td>{itemIndex === 0 && equipIndex === 0 ? item.name : ''}</td>
                        <td colSpan={2}>{equip}</td>
                      </tr>
                    ))
                  ))}
                  {horse.textRow && (
                    <tr key={`${horse.horse}-textRow-${horseIndex}`} className={styles.smallerText}>
                      <td colSpan={3} className={styles.textRow}>{horse.textRow}</td>
                    </tr>
                  )}
                  <tr className='delimiter'></tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
        <p className={styles.girthLengthInfo}>Sadelgjordslängden är cirka, inte krav</p>
        <p className='infoText'>
          Gå alltid efter utrustningskolumnen.<br/>
          <span className={styles.locationInfo}>
            Platsen är där du oftast hittar sadeln, men platsen kan ändras i och med att hästarna ibland byter sin lektionssadel.
          </span>
        </p>
        <div className='thinLine'></div>
        <ul className='infoText'>
          <li>har hästen en pläd i vanliga fall ska den bytas ut mot en padd vid hoppning</li>
          <li>om hästen inte använder sin ordinarie sadel ska den alltid ha en padd - gäller EJ Alonsos nya sadel under invänjningen</li>
          <li>byt alltid ut mjuka benskydd (ex: Harusa) mot hårda hoppskydd</li>
        </ul>
        <div className='thinLine'></div>
        <p className='infoText'>
          Alonso får inte gå med hopp5, den är utprovad och passar inte honom.
        </p>
        <div className='thinLine'></div>
        <p className='infoText'>
          Skicka gärna sms till 0736533933 med ändringar + vilken ridlärare som sa det, så att listan alltid är uppdaterad 🙂
        </p>
      </div>
    </Layout>
  )
}
