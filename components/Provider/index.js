import React from 'react'

// NOTE this is the initial, global state of the app
const initialState = {
  currentUser: {}
}

export const Context = React.createContext(initialState)

/**
 * This component is the Context Provider using the new React Context API that
 * gives the app global state
 * https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3
 */
class Provider extends React.Component {
  state = initialState

  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }

  render () {
    return (
      <Context.Provider
        value={{
          // NOTE any actions defined in this component must be added to the value here as well
          ...this.state,
          setCurrentUser: this.setCurrentUser
        }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider
