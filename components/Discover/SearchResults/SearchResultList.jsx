import React from "react";
import styles from "./SearchResultList.module.scss";
import NGOResultCard from "./NGOResultCard/NGOResultCard";
function SearchResultList({ ngoList }) {
  //console.log("limts", ngoList)
  return (
    <div className={styles.resultListWrapper}>
      {ngoList.map((ngo, idx) => (
        <NGOResultCard ngo = {ngo} key = {idx}/>
      ))}
    </div>
  );
}

export default SearchResultList;
