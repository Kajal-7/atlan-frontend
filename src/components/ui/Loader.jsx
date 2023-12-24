import React, { memo } from 'react'
import styles from './Loader.module.css'

/*
@description
The component displays the query result.
*/
const Loader = memo(() => {
    return (
        <div className={styles.banterLoader}>
            <div className={styles.banterLoader__box}></div>
            <div className={styles.banterLoader__box}></div>
            <div className={styles.banterLoader__box}></div>
            <div className={styles.banterLoader__box}></div>
            <div className={styles.banterLoader__box}></div>
            <div className={styles.banterLoader__box}></div>
            <div className={styles.banterLoader__box}></div>
            <div className={styles.banterLoader__box}></div>
            <div className={styles.banterLoader__box}></div>
        </div>

    )
})

export default Loader