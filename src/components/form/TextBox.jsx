import React, { memo } from 'react'
import styles from './TextBox.module.css'

const TextBox = memo(({ setQuery }) => {
  return (
    <input placeholder="Write your query here" type="text" name="text" className={styles.input} onChange={(e) => setQuery(e.target.value)} />
  )
})

export default TextBox