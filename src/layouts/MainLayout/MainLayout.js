import React from 'react'
import Split from 'react-split'
import MediaQuery from "react-responsive"

import styles from './MainLayout.module.css'

const MainLayout = (props) => {
  return (
    <>
      <div className={styles.container}>
        <header className={[styles.row, styles.header].join(' ')}>
          {props.logo}
          {props.advertisement}
        </header>

        <div className={[styles.row, styles.center].join(' ')}>
          <MediaQuery query="(min-width: 726px)">
            <Split
              sizes={[75, 25]}
              style={{ display: "flex", flex: "1 1 auto" }}>
              {props.chatRoom}
              {props.connectedUsers}
            </Split>
          </MediaQuery>
          <MediaQuery query="(max-width:725px)">
            {props.chatRoom}
          </MediaQuery>
        </div>

        <footer className={[styles.row, styles.footer].join(' ')}>
          {props.footer}
        </footer>
      </div>
    </>
  )
}

export default MainLayout
