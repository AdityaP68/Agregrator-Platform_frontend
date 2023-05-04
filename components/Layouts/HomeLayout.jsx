import React from "react";
import styles from "./HomeLayout.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Infobar from "../Infobar/Infobar";
import { useCookies } from "react-cookie";

function HomeLayout({ children }) {
  const cookies = useCookies()
  console.log("this is cookies", cookies)

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Sidebar user={cookies[0].user} />
      </aside>
      <main className={styles.main}>
        <Navbar />
        <section className={styles.contentSection}>
          <div className={styles.contentSectionWrapper}>{children}</div>
        </section>
      </main>
      <Infobar />
    </div>
  );
}

export default HomeLayout;
