import React from 'react'
import App, { Container } from 'next/app'

import firebase from '../lib/firebase'

import {
  Provider,
  Consumer,
  AuthModal
} from '../components'

// using this additional container to bind firebase auth listener to store
class BoundContainer extends React.Component {
  constructor (props) {
    super(props)
    this.authListener = this.authListener.bind(this)
    this.authListener(props.store)
  }

  authListener = (store) => {
    this.stateListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.setCurrentUser(user)
      } else {
        // user is not logged in
        return null
      }
    })
  }

  componentWillUnmount = () => {
    this.stateListener = undefined
    this.authListener = undefined
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <AuthModal {...pageProps} />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

class AppContainer extends App {
  render () {
    return (
      <Container>
        <Provider>
          <Consumer>
            {store => <BoundContainer store={store} {...this.props} />}
          </Consumer>
        </Provider>
      </Container>
    )
  }
}

export default AppContainer
