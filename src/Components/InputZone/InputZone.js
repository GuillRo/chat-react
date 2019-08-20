import React, { useState, useEffect } from 'react'

import styles from './InputZone.module.css'

const InputZone = (props) => {
  const [connected, setConnected] = useState(true)
  
  const socket = props.socket
  useEffect(() => {
    socket.on('post message', msg => {
      console.log('messageuh: ' + msg)
    })
    // return () => { socket.close()}
  })
  
  const post = () => {
    console.log("hey")
    socket.emit('post message', "emittt")
  }

  const login = () => {
    setConnected(true)
  }

  const logout = () => {
    setConnected(false)
  }

  let inputs
  if (connected) {
    inputs =
      <>
        <input className={styles.text} placeholder="say something edgy"></input>
        <button onClick={post}>Send</button>
        <button onClick={logout}>Logout</button>
      </>
  }
  else {
    inputs =
      <>
        {/* <label htmlFor="username">Enter your username:</label> */}
        <input placeholder="username"></input>
        <button onClick={login}>Login</button>
      </>
  }

  return (
    <div className={styles.InputZone}>
      {inputs}
    </div>
  )
}

export default InputZone