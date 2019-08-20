import React, { useState, useEffect } from 'react'
import io from "socket.io-client"

import LoginButton from '../LoginButton/LoginButton'

import styles from './InputZone.module.css'

const InputZone = (props) => {

  const [connected, setConnected] = useState(true)
  
  
  
  const socket = io()
  useEffect(() => {
    // socket.open()
    socket.on('post message', msg => {
      console.log('messageuh: ' + msg)
    })
    
    return () => { socket.close()}
  })
  
  const post = () => {
    // const socket = io('localhost:8080')
    console.log("hey")
    socket.emit('post message', "emittt")
  }

  let inputs = []

  if (connected) {
    inputs =
      <>
        <input className={styles.text} placeholder="say something edgy"></input>
        <button>Send</button>
        <button>Logout</button>
      </>
  }
  else {
    inputs =
      <>
        <input placeholder="username"></input>
        <LoginButton></LoginButton>
      </>
  }

  // socket.on('time', function(timeString) {
  //   console.log(timeString)
  // })
  return (
    <div className={styles.InputZone}>
      {inputs}
      {/* 
      <input placeholder="username"></input>
      <input className={styles.text} placeholder="say something edgy"></input>
      <button>Send</button> */}
    </div>
  )
}

export default InputZone