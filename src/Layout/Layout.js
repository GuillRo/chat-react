import React from 'react'
import Split from 'react-split'
import MediaQuery from "react-responsive"

import Header from './Header/Header'
import Footer from './Footer/Footer'


import ChatRoom from '../Components/ChatRoom/ChatRoom'
import ConnectedUsers from '../Components/ConnectedUsers/ConnectedUsers'
import InputZone from '../Components/InputZone/InputZone'

import SocketContext from '../socketContext'
import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <>
      <div className={styles.container}>
        <Header customStyle={styles.row}/>

        <MediaQuery query="(min-width: 725px)">
          <Split
            sizes={[75, 25]}
            className={`${styles["row"]} ${styles["center"]}`}>
            <div className={styles["messages-box"]}>
              <ChatRoom />
            </div>
            <div className={styles["users-box"]}>
              <ConnectedUsers />
            </div>
          </Split>
        </MediaQuery>
        <MediaQuery query="(max-width:724px)">
          <div className={`${styles["row"]} ${styles["center"]}`}>
            <div className={styles["messages-box"]}>
              <ChatRoom />
            </div>
          </div>
        </MediaQuery>

        <div className={`${styles["row"]} ${styles["footer"]}`}>
          <SocketContext.Consumer>
            {socket => <InputZone {...props} socket={socket} />}
            {/* <InputZone socket={props.socket}></InputZone> */}
          </SocketContext.Consumer>
        </div>
      </div>
    </>














    // <Container className={styles.Container}>
    //   <Row className={styles.Row}>
    //     <Col
    //       // md={{ span: 6, offset: 3 }}
    //       sm={12}
    //       className={styles.header}>
    //       <p>Chat like it's 2003</p>
    //       {/* <LoginButton></LoginButton> */}
    //     </Col>
    //   </Row>
    //   <Row className={styles.Row}>
    //     <Col
    //       // md={{ span: 6, offset: 3 }}
    //       sm={9}
    //       className={styles["chat-window"]}>
    //       {/* <Display /> */}
    //       {props.children}
    //     </Col>
    //     <Col
    //       sm={3}
    //       className={styles["users-window"]}>

    //     </Col>
    //   </Row>
    //   <Row className={styles.Row}>
    //     <Col
    //       // md={{ span: 6, offset: 3 }}
    //       sm={12}
    //       className={styles["input-zone"]}>
    //       <SocketContext.Consumer>
    //         {socket => <InputZone {...props} socket={socket} />}
    //         {/* <InputZone socket={props.socket}></InputZone> */}
    //       </SocketContext.Consumer>
    //     </Col>
    //   </Row>
    // </Container>
  )
}

export default Layout