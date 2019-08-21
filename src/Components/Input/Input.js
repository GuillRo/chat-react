import React from 'react'

import styles from './Input.module.css'

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => { props.onChange(e.target.value) }}
      className={[props.customStyle, styles.Input].join(' ')}>
    </input>
  )
}

export default Input
