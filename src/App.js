import React from 'react'

import MainLayout from './layouts/MainLayout/MainLayout'
import ChatRoom from './components/ChatRoom/ChatRoom'
import ConnectedUsers from './components/ConnectedUsers/ConnectedUsers'
import Logo from './components/Logo/Logo'
import Advertisement from './components/Advertisement/Advertisement'
import LoggedUserFooter from './components/LoggedUserFooter/LoggedUserFooter'
import UnloggedUserFooter from './components/UnloggedUserFooter/UnloggedUserFooter'

import { connect } from 'react-redux'

// import io from "socket.io-client"
// import SocketContext from './socketContext'

// /!\/!\/!\/!\/!\/!\/!\/!\/!\ VOIR branch users pour context avec l'app.js
//  et AUSSI POUR SCANLINES!

const App = (props) => {


  let footer
  if (props.logged) {
    footer = <LoggedUserFooter />
  } else {
    footer = <UnloggedUserFooter />
  }

  return (
    <MainLayout
      advertisement={<Advertisement />}
      logo={<Logo />}
      chatRoom={<ChatRoom />}
      connectedUsers={<ConnectedUsers />}
      footer={footer}>
    </MainLayout>
  )
}

const mapStateToProps = state => {
  return {
    logged: state.userData.logged
  }
}

export default connect(mapStateToProps)(App)
