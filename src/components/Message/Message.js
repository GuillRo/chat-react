import React from 'react'

import styles from './Message.module.css'

const Message = (props) => {
  return (
    <div className={styles.Message}>
      <p><strong>{props.name}: </strong></p>
      <p>{props.text}</p>
    </div>
  )
}

export default Message