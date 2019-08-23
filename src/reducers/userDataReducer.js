import { UPDATE_USERNAME, UPDATE_LOGGED } from '../actions/types'

const INITIAL_STATE = {
  username: '',
  socket: null,
  logged: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.payload }
      case UPDATE_LOGGED:
        return{...state, logged: action.payload }
    default: return state
  }
}