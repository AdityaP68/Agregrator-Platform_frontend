import React from "react";
import styles from "./SearchFilter.module.scss";

function SearchFilter() {
  return (
    <div className={styles.filterRow}>
      <small>Filter By:</small>
      <select className={styles.dropdown} onChange={""}>
        <option selected disabled>
          Popularity
        </option>
        <option selected>Option 1</option>
        <option selected>Option 3</option>
        <option selected>Option 3</option>
      </select>
      <select className={styles.dropdown} onChange={""}>
        <option selected disabled>
          Credibility
        </option>
      </select>
      <select className={styles.dropdown} onChange={""}>
        <option selected disabled>
          Location
        </option>
      </select>
      <select className={styles.dropdown} onChange={""}>
        <option selected disabled>
          Category
        </option>
      </select>
      <select className={styles.dropdown} onChange={""}>
        <option selected disabled>
          Scale
        </option>
      </select>
    </div>
  );
}

export default SearchFilter;
