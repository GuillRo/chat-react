import React, { useState } from 'react'

import Input from '../Input/Input'
import Button from '../Button/Button'

import styles from './Form.module.css'

const Form = (props) => {

  const [inputValue, setInputValue] = useState('')

  const submit = event => {
    event.preventDefault()
    if (inputValue.toString().length > 0) {
      console.log(inputValue)
    }
    setInputValue('')
  }

  return (
    <form onSubmit={e => { submit(e) }}>
      <Input
        customStyle={styles.grow}
        placeholder={props.placeholderInput}
        value={inputValue}
        onChange={val => { setInputValue(val) }} />
      <Button>{props.buttonName}</Button>
    </form>
  )
}

export default Form