import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import InputZone from '../Components/InputZone/InputZone'

import SocketContext from '../socketContext'
import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <Container className={styles.Container}>
      <Row className={styles.Row}>
        <Col
          md={{ span: 6, offset: 3 }}
          sm={12}
          className={styles.header}>
          <p>Chat like it's 2003</p>
          {/* <LoginButton></LoginButton> */}
        </Col>
      </Row>
      <Row className={styles.Row}>
        <Col
          md={{ span: 6, offset: 3 }}
          sm={12}
          className={styles["chat-window"]}>
          {/* <Display /> */}
          {props.children}
        </Col>
      </Row>
      <Row className={styles.Row}>
        <Col
          md={{ span: 6, offset: 3 }}
          sm={12}
          className={styles["input-zone"]}>
          <SocketContext.Consumer>
          {socket => <InputZone {...props} socket={socket} />}
            {/* <InputZone socket={props.socket}></InputZone> */}
          </SocketContext.Consumer>
        </Col>
      </Row>
    </Container>
  )
}

export default Layout