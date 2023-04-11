import React from 'react'
import styles from './SearchResultList.module.scss'
import NGOResultCard from './NGOResultCard/NGOResultCard'
function SearchResultList() {
  return (
      <div className={styles.resultListWrapper}>    
        <NGOResultCard/>
        <NGOResultCard/>
        <NGOResultCard/>
        <NGOResultCard/>
        <NGOResultCard/>
      </div>
  )
}

export default SearchResultList