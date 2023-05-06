import React from "react";
import styles from "./Landing.module.scss";
import NGOSearchBar from "./NGOSearchBar";
import SearchFilter from '../SearchFilter/SearchFilter'

function LandingSection({setSearchName}) {
  return (
    <section className={styles.landingSection}>
      <div className={styles.landingSectionWrapper}>
            <h1>Find the right NGO</h1>
          <NGOSearchBar setSearchName={setSearchName} />
          {/* <SearchFilter/> */}
      </div>
    </section>
  );
}

export default LandingSection;
