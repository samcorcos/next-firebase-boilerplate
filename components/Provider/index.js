import React from 'react'

import firebase from '../../lib/firebase'
import Context, { initialState } from '../../lib/context'

/**
 * This component is the Context Provider using the new React Context API that
 * gives the app store state
 * https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3
 */
class Provider extends React.Component {
  state = initialState

  setAuthModalType = (type = 'signUp') => {
    this.setState({ authModalType: type })
  }

  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }

  signOut = async () => {
    await firebase.auth().signOut()
    this.setState({ initialState })
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
