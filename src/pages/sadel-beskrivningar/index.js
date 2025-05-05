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
          Om en hoppsadel tappat sin märkning, skicka ett sms till 0736533933 så den får en ny 👌
        </p>

        {DESCRIPTIONS?.map(description => (
          <div key={description.name}>
            <p className={styles.header}>{description.name}</p>
            <p>{description.description}</p>
            {description.image && (
              <img src={description.image} className={styles.saddleImage} alt="" />
            )}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default SaddleDescriptions