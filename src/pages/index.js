import Layout from '@/components/Layout/Layout'
import STRINGS from '@/constants/saddles'
import styles from './startpage.module.scss'

export default function Home() {
  let previousHorse = null

  return (
    <Layout>
      <table className={styles.saddleTable}>
        <thead>
          <tr>
            <th>Häst</th>
            <th>Sadel</th>
            <th>Cm</th>
          </tr>
        </thead>
        <tbody>
          {STRINGS.flatMap((horse, horseIndex) => {
            return horse.saddles
              .filter(saddleItem => saddleItem.saddle)
              .map((saddleItem, index) => {
                const isNewHorse = horse.horse !== previousHorse
                previousHorse = horse.horse

                const keyPrefix = `${horse.horse}-${index}`

                return [
                  isNewHorse && horseIndex !== 0 && (
                    <tr key={`${keyPrefix}-delimiter`}>
                      <td colSpan={3} className={styles.tableDelimiter}></td>
                    </tr>
                  ),
                  <tr key={keyPrefix}>
                    {index === 0 ? 
                      <>
                        <td className={styles.firstChoice}>{horse.horse}</td>
                        <td className={styles.firstChoice}>{saddleItem.saddle}</td>
                        <td className={styles.firstChoice}>{saddleItem.girth}</td>
                      </>
                    : 
                      <>
                        <td></td>
                        <td>{saddleItem.saddle}</td>
                        <td>{saddleItem.girth}</td>
                      </>
                    }
                  </tr>
                ]
              })
          })}
        </tbody>
      </table>
    </Layout>
  )
}
