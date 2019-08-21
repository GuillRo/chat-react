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

// const [input, setInput] = useState('')
// const handleKeyDown = key => {
//   if (key === "Enter" && input.toString().length > 0) {
//     props.handleInput(input)
//     setInput('')
//   }
// }

// onKeyDown={e => handleKeyDown(e.key)}