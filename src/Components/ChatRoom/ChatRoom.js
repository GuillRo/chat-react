import React from 'react'

import Message from '../Message/Message'
import styles from './ChatRoom.module.css'

const ChatRoom = () => {
  return (
    <div className={styles.ChatRoom}>
      <Message name="john" text="hi my name is john"></Message>
      <Message name="Tom" text="hi my name is tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom"></Message>
    </div>
  )
}

export default ChatRoom