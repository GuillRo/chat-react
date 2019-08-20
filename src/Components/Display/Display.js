import React from 'react'

import Message from '../Message/Message'
import styles from './Display.module.css'

const Display = () => {
  return (
    <div className={styles.Display}>
      <Message name="john" text="hi my name is john"></Message>
      <Message name="Tom" text="hi my name is tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom"></Message>
    </div>
  )
}

export default Display