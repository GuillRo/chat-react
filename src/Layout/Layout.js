import React from 'react'
import Split from 'react-split'
import MediaQuery from "react-responsive"

import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <>
      <div className={styles.container}>
        <header className={[styles.row, styles.header].join(' ')}>
          {props.logo}
          {props.advertisement}
        </header>

        <div className={[styles.row, styles.center].join(' ')}>
          <MediaQuery query="(min-width: 725px)">
            <Split
              sizes={[75, 25]}
              style={{ display: "flex", flex: "1 1 auto" }}>
              {props.chatRoom}
              {props.connectedUsers}
            </Split>
          </MediaQuery>
          <MediaQuery query="(max-width:724px)">
            {props.chatRoom}
          </MediaQuery>
        </div>

        <footer className={[styles.row, styles.footer].join(' ')}>
          {props.userActions}
        </footer>
      </div>
    </>
  )
}

export default Layout
