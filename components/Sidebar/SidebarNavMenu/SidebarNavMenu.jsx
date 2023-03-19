import React from 'react'
import styles from './SidebarNavMenu.module.scss'
import NavLink from './NavLink'

function SidebarNavMenu() {
  return (
    <div className={styles.menu}>
      <NavLink title="feed"/>
      <NavLink title="discover"/>
      <NavLink title="community"/>
      <NavLink title="marketplace"/>
      <NavLink title="settings"/>
    </div>
  )
}

export default SidebarNavMenu