import React from 'react'

// NOTE this is the initial, state of the app store
export const initialState = {
  currentUser: {}
}

export const Context = React.createContext(initialState)

export default Context
