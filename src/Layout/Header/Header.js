import React from 'react'

import styles from './Header.module.css'

const Header = (props) => {
  return (
    // <div className={`${styles["row"]} ${styles["header"]}`}>
    <div className={[props.customStyle, styles.Header].join(' ')}>
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
  )
}

export default Header