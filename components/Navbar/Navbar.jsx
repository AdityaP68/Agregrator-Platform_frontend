import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchBox}>
          <SearchIcon className={styles.searchIcon}/>
          <input type="text" placeholder='Search'/>
        </div>
          <div className={styles.btnWrapper}>
            <button>search</button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar