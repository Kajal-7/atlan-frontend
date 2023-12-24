import React from 'react'
import styles from './MainNavbar.module.css'

/*
@description
The component renders a simple navigation bar.
*/

const MainNavbar = () => {
  return (
    <div id={styles.navbar}>
      <img src='./atlan_logo.png' id={styles.logo} alt='#'></img>   SQL Editor
    </div>
  )
}

export default MainNavbar