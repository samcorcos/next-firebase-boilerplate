import React from 'react'

// NOTE this is the initial, state of the app store
export const initialState = {
  currentUser: {},
  signUpOrLogIn: 'signUp' // one of: 'signUp', 'logIn', 'forgot' (default: 'signUp')
}

export const Context = React.createContext(initialState)

export default Context
