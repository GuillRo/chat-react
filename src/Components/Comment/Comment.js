import React from 'react'

import styles from './Comment.module.css'

const Comment = (props) => {
  return (
    <div className={styles.Comment}>
      <p><strong>{props.name}: </strong></p>
      <p>{props.text}</p>
    </div>
  )
}

export default Comment