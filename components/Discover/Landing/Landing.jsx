import React from "react";
import styles from "./Landing.module.scss";
import NGOSearchBar from "./NGOSearchBar";

function LandingSection() {
  return (
    <section className={styles.landingSection}>
      <div className={styles.landingSectionWrapper}>
            <h1>Find the right NGO</h1>
          <NGOSearchBar />

      </div>
    </section>
  );
}

export default LandingSection;
