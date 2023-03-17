import styles from './Home.module.scss'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Home() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Sidebar/>
      </aside>
      <main className={styles.main}>

      </main>
    </div>
  )
}
