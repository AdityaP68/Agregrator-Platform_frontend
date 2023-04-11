import React from 'react'
import HomeLayout from '../../components/Layouts/HomeLayout'
import SecondaryLayout from '../../components/Layouts/SecondaryLayout'
import LandingSection from '../../components/Discover/Landing/Landing'
import SearchResultList from '../../components/Discover/SearchResults/SearchResultList'
import styles from './index.module.scss'

export default function index() {
  return (
    <SecondaryLayout>
      <div className={styles.contentWrapper}>
      <LandingSection/>
      <SearchResultList/>
      </div>
    </SecondaryLayout>
  )
}
