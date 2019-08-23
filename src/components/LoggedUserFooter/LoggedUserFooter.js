import React, { useState } from 'react'
import { connect } from 'react-redux'

import Button from '../Button/Button'
import Input from '../Input/Input'

import styles from './LoggedUserFooter.module.css'

const LoggedUserFooter = (props) => {

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
    <div className={styles.LoggedUserFooter}>
      <p>Connected as: {props.username}</p>
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

const mapStateToProps = state => {
  return {
    username: state.userData.username
  }
}

export default connect(mapStateToProps)(LoggedUserFooter)