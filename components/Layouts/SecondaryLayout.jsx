import React from "react";
import styles from "./SecondaryLayout.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Infobar from "../Infobar/Infobar";
import { useCookies } from "react-cookie";

function SecondaryLayout({children}) {
  const cookies = useCookies()
  return (
    <div className={styles.container}>
    <aside className={styles.aside}>
      <Sidebar user = {cookies[0].user}/>
    </aside>
    <main className={styles.main}>
      <Navbar />
      <section className={styles.contentSection}>
        <div className={styles.contentSectionWrapper}>{children}</div>
      </section>
    </main>
    <div className={styles.sampleInfobar}>
    {/* <div className={styles.wrapper}>
        <div className={styles.items}></div>
        <div className={styles.items}></div>
        <div className={styles.items}></div>
        <div className={styles.items}></div>
        <div className={styles.items}></div>
        <div className={styles.items}></div>
    </div> */}
    </div>
  </div>
  )
}

export default SecondaryLayout