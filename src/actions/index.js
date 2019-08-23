import { UPDATE_USERNAME, UPDATE_LOGGED } from './types'

export const updateUsername = username => {
  return {
    type: UPDATE_USERNAME,
    payload: username
  }
}

export const updateLogged = boolean => {
  return {
    type: UPDATE_LOGGED,
    payload: boolean
  }
}