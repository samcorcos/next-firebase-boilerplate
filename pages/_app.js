import React from 'react'
import App, { Container } from 'next/app'

import firebase from '../lib/firebase'

import {
  Provider,
  Consumer
} from '../components'

// using this additional container to bind firebase auth listener to global
class BoundContainer extends React.Component {
  constructor (props) {
    super(props)
    this.authListener = this.authListener.bind(this)
    this.authListener(props.global)
  }

  authListener = (global) => {
    this.stateListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        global.setCurrentUser(user)
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
            {global => <BoundContainer global={global} {...this.props} />}
          </Consumer>
        </Provider>
      </Container>
    )
  }
}

export default AppContainer
