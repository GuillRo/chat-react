import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateUsername, updateLogged } from '../../actions/index'

import Button from '../Button/Button'
import Input from '../Input/Input'

import styles from './UnloggedUserFooter.module.css'

const UnloggedUserFooter = (props) => {

  const [username, setUsername] = useState(props.username)
  const [customInputStyle, setCustomInputStyle] = useState('')


  useEffect(() => {
    if (customInputStyle !== '') {

      const timer = setTimeout(() => {
        setCustomInputStyle('')
      }, 1500)
      return () => clearTimeout(timer)
    }

  }, [customInputStyle])
  const login = (event) => {
    event.preventDefault()
    if (username.toString().length > 0) {
      props.updateUsername(username)
      props.updateLogged(true)
    } else if (customInputStyle === '') {
      setCustomInputStyle(styles['Input-red'])
    }
  }

  return (
    <form onSubmit={e => login(e)} className={styles.UnloggedUserFooter}>
      <Input placeholder="username" onChange={val => setUsername(val)} value={username} customStyle={customInputStyle} />
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
