import React from 'react'
import Layout from './Layout/Layout'
import io from "socket.io-client"
import { Route, Switch } from 'react-router-dom'

import Display from './Components/Display/Display'

import SocketContext from './socketContext'



const App = () => {

  const socket = io()
  // useEffect(() => {
  //   // socket.open()
  //   socket.on('post message', msg => {
  //     console.log('messageuh: ' + msg)
  //   })
  
  //   return () => { socket.close() }
  // })
  
  // const post = () => {
  //   // const socket = io('localhost:8080')
  //   console.log("hey")
  //   socket.emit('post message', "emittt")
  // }
  
  
  return (
    <SocketContext.Provider value={socket}>
    <Layout>
      <Display />
    </Layout>
    </SocketContext.Provider>
  )
}

export default App
