import React from 'react'

import firebase from '../../lib/firebase'

// NOTE this is the initial, store state of the app
const initialState = {
  currentUser: {},
  authModalType: null // we want to include this on store state because we want to allow multiple components to trigger it
}

export const Context = React.createContext(initialState)

/**
 * This component is the Context Provider using the new React Context API that
 * gives the app store state
 * https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3
 */
class Provider extends React.Component {
  state = initialState

  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }

  // signout needs to be handled at the top-level because we need to reset the cache
  // or firebase doesnt know whether or not the user is signed out or is checking
  signOut = () => {
    firebase.auth().signOut()
    this.setState({ ...initialState })
  }

  setAuthModalType = (type) => {
    this.setState({ authModalType: type })
  }

  render () {
    return (
      <Context.Provider
        value={{
          // NOTE any actions defined in this component must be added to the value here as well
          ...this.state,
          setCurrentUser: this.setCurrentUser,
          setAuthModalType: this.setAuthModalType,
          signOut: this.signOut
        }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider
