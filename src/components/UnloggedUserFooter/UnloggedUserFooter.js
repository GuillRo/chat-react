import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateUsername, updateLogged } from '../../actions/index'

import Button from '../Button/Button'
import Input from '../Input/Input'

import styles from './UnloggedUserFooter.module.css'

const UnloggedUserFooter = (props) => {

  const [username, setUsername] = useState(props.username)

  const login = (event) => {
    event.preventDefault()
    if (username.toString().length > 0) {
      props.updateUsername(username)
      props.updateLogged(true)
    }
  }

  return (
    <form onSubmit={e => login(e)} className={styles.UnloggedUserFooter}>
      <Input placeholder="username" onChange={val => setUsername(val)} value={username} />
      <Button>Log in</Button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    username: state.userData.username,
    logged: state.userData.logged
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateUsername: (newUsername) => { dispatch(updateUsername(newUsername)) },
    updateLogged: boolean => { dispatch(updateLogged(boolean)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnloggedUserFooter)
