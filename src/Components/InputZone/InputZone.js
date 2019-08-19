import React from 'react'

import styles from './InputZone.module.css'

const InputZone = (params) => {
  return (
    <div className={styles.InputZone}>
      <input placeholder="username"></input>
      <input className={styles.text} placeholder="say something edgy"></input>
      <button>Send</button>
    </div>

  )
}

export default InputZone