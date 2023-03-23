import React from "react";
import styles from "./Communities.module.scss";
import HomeLayout from "../../components/Layouts/HomeLayout";
import FavouriteBar from "../../components/FavouriteBar/FavouriteBar";
import ShowcaseCard from "../../components/Cards/ShowcaseCard";

export default function index() {
  return (
    <HomeLayout>
      <div className={styles.contentWrapper}>
        <FavouriteBar />
        <section className={styles.cardSection}>
          <ShowcaseCard />
          <ShowcaseCard />
          <ShowcaseCard />
        </section>
        <section className={styles.cardSection} style={{ marginTop: "4rem" }}>
          <ShowcaseCard />
          <ShowcaseCard />
          <ShowcaseCard />
        </section>
        <section className={styles.cardSection} style={{ marginTop: "4rem" }}>
          <ShowcaseCard />
          <ShowcaseCard />
          <ShowcaseCard />
        </section>
        <section className={styles.cardSection} style={{ marginTop: "4rem" }}>
          <ShowcaseCard />
          <ShowcaseCard />
          <ShowcaseCard />
        </section>
      </div>
    </HomeLayout>
  );
}
