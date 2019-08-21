import React, { useState } from 'react'

import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'

import styles from './UserActions.module.css'

const UserActions = (props) => {

  const [inputValue, setInputValue] = useState('')

  const logout = () => {
    console.log('logout')
  }

  const submit = event => {
    event.preventDefault()
    if (inputValue.toString().length > 0) {
      console.log(inputValue)
    }
    setInputValue('')
  }

  return (
    <div className={styles.UserActions}>
      <form onSubmit={e => { submit(e) }} className={styles.form}>
        <Input
          customStyle={styles.Input}
          placeholder="Say something edgy"
          value={inputValue}
          onChange={val => { setInputValue(val) }} />
        <Button>Send</Button>
      </form>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}

export default UserActions