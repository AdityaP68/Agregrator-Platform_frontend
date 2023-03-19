import React from 'react'
import styles from './HomeLayout.module.scss'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Infobar from '../Infobar/Infobar'

function HomeLayout({children}) {
  return (
    <div className={styles.container}>
    <aside className={styles.aside}>
      <Sidebar/>
    </aside>
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </main>
    <Infobar/>
  </div>
  )
}

export default HomeLayout