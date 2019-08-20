import React from 'react'

import Message from '../Message/Message'
import styles from './ChatDisplay.module.css'

const ChatDisplay = () => {
  return (
    <div className={styles.ChatDisplay}>
      <Message name="john" text="hi my name is john"></Message>
      <Message name="Tom" text="hi my name is tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom"></Message>
    </div>
  )
}

export default ChatDisplay