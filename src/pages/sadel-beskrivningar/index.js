import Link from 'next/link'
import DESCRIPTIONS from '@/constants/descriptions'
import Layout from '@/components/Layout/Layout'
import styles from './sadel-beskrivningar.module.scss'

const SaddleDescriptions = () => {
  return (
    <Layout>
      <div className={styles.saddleDescriptionsContainer}>
        <div className='switchPageLinkContainer'>
          <Link href="/" className='switchPageLink'>Tillbaka till hästar</Link>
          <br/>
          <Link href="/avstand" className='switchPageLink'>Avstånd</Link>
        </div>
        <h1>Sadelbeskrivningar</h1>
        <p className='infoText'>
          Om en siffermärkt sadel tappat sin namnlapp kan du se hur den ser ut här istället.<br/>
          Skicka gärna ett sms till nummer 0736533933 med vilken sadel som tappat sin lapp så får 
          den en ny &#128578;
        </p>

        <p className='attention'>
          OBS. Hittar inte Hopp 1 för att namnmärka den - vet någon om den kanske är samma som Hopp 3 eller 6?<br/>
          Om Hopp1 existerar, vill någon berätta var den är eller ge tydligare beskrivning på den? 🙏
        </p>

        {DESCRIPTIONS?.map(description => (
          <div key={description.name}>
            <p className={styles.header}>{description.name}</p>
            <p>{description.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default SaddleDescriptions