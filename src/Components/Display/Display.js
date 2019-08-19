import React from 'react'

import Comment from '../Comment/Comment'
import styles from './Display.module.css'

const Display = () => {
  return (
    <div className={styles.Display}>
      <Comment name="john" text="hi my name is john"></Comment>
      <Comment name="Tom" text="hi my name is tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom tom"></Comment>
    </div>
  )
}

export default Display