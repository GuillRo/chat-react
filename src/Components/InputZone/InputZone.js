import React, { useState, useEffect } from 'react'

import Input from '../Input/Input'
import Button from '../Button/Button'
import Form from '../Form/Form'

import styles from './InputZone.module.css'

const InputZone = (props) => {
  const [connected, setConnected] = useState(true)

  let inputs
  if (connected) {
    inputs =
      <>
        <Form placeholderInput="Say something edgy" buttonName="Send"/>
        <Button>Logout</Button>
      </>
  }
  else {
    inputs =
      <>
        <Form placeholderInput="Username" buttonName="Login"/>
      </>
  }

  return (
    <div className={styles.InputZone}>
      {inputs}
    </div>
  )
}

export default InputZone


  // const socket = props.socket
  // useEffect(() => {
  //   socket.on('post message', msg => {
  //     console.log('messageuh: ' + msg)
  //   })
  //   // return () => { socket.close()}
  // })
  // const post = () => {
  //   console.log("hey")
  //   socket.emit('post message', "emittt")
  // }

  // const [username, setUsername] = useState()

  // const login = (login) => {
  //   if (login && login.toString().length > 0) {
  //     setUsername(login)
  //     setConnected(true)
  //   }
  // }

  // const logout = () => {
  //   setConnected(false)
  //   setUserName(null)
  // }