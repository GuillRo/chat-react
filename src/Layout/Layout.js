import React from 'react'
import Split from 'react-split'

import ChatDisplay from '../Components/ChatDisplay/ChatDisplay'
import ConnectedUsers from '../Components/ConnectedUsers/ConnectedUsers'
import InputZone from '../Components/InputZone/InputZone'

import SocketContext from '../socketContext'
import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles["row"]} ${styles["header"]}`}>
          <h1>
            <span>S</span>
            <span>U</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>C</span>
            <span>H</span>
            <span>A</span>
            <span>T</span>
            <span>9</span>
            <span>5</span>
          </h1>
          <div className={styles.ads}>
            <div>
              Best strawberries in town
            </div>
            <br />
            <div>
              call +1-202-555-0169
            </div>
          </div>
        </div>
        <Split
          sizes={[75, 25]}
          className={`${styles["row"]} ${styles["center"]}`}>
          <div className={styles["messages-box"]}>
            <ChatDisplay />
          </div>
          <div className={styles["users-box"]}>
            <ConnectedUsers />
          </div>
        </Split>
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