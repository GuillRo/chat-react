import React from 'react'
import io from "socket.io-client"

import Layout from './Layout/Layout'
import ChatRoom from './Components/ChatRoom/ChatRoom'
import ConnectedUsers from './Components/ConnectedUsers/ConnectedUsers'
import Logo from './Components/Logo/Logo'
import Advertisement from './Components/Advertisement/Advertisement'
import UserActions from './Actions/UserActions/UserActions'

import SocketContext from './socketContext'

const App = () => {

  const socket = io()
  return (
    <SocketContext.Provider value={socket}>
      <Layout
        advertisement={<Advertisement />}
        logo={<Logo />}
        chatRoom={<ChatRoom />}
        connectedUsers={<ConnectedUsers />}
        userActions={<UserActions />}>
      </Layout>
    </SocketContext.Provider>
  )
}

export default App
