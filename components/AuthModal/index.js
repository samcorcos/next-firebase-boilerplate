import React from 'react'

import firebase from '../../lib/firebase'
import Context from '../../lib/context'

import {
  Input,
  Modal
} from '../'

const PasswordReset = (self, store) => {
  return (
    <div>
      {self.state.error && <p style={{ color: 'red' }}>{self.state.error}</p>}
      {self.state.resetEmailSent && <p style={{ color: 'blue' }}>Password reset email sent. Please check your email.</p>}
      <h3>Password reset</h3>
      <Input
        label='Email'
        value={self.state.email}
        onChange={t => self.setState({ email: t })} />
      <button onClick={() => self.handleReset(self)}>
        Send reset email
      </button>
      <div className='link' onClick={() => store.setAuthModalType('signIn')}>
        Sign in
      </div>

      <style jsx>{`
        .link {
          color: blue;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

const SignInContent = (self, store) => {
  return (
    <div>
      {self.state.error && <p style={{ color: 'red' }}>{self.state.error}</p>}
      <h3>Log in</h3>
      <Input
        label='Email'
        value={self.state.email}
        onChange={t => self.setState({ email: t })} />
      <Input
        label='Password'
        type='password'
        value={self.state.password}
        onChange={t => self.setState({ password: t })} />

      <button onClick={() => self.handleSignIn(self, store)}>
        Log in
      </button>
      <div className='link' onClick={() => store.setAuthModalType('signUp')}>
        Don't have an account? Sign up
      </div>
      <div className='link' onClick={() => store.setAuthModalType('forgot')}>
        Forgot password?
      </div>
      <style jsx>{`
        .link {
          color: blue;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

const SignUpContent = (self, store) => {
  return (
    <div>
      {self.state.error && <p style={{ color: 'red' }}>{self.state.error}</p>}
      <h3>Sign up now</h3>
      <Input
        label='Email'
        value={self.state.email}
        onChange={t => self.setState({ email: t })} />
      <Input
        label='Password'
        type='password'
        value={self.state.password}
        onChange={t => self.setState({ password: t })} />

      <button onClick={() => self.handleSignUp(self, store)}>
        Sign up
      </button>
      <div className='link' onClick={() => store.setAuthModalType('signIn')}>
        Already have an account? Log in
      </div>
      <style jsx>{`
        .link {
          color: blue;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

const ModalContent = (self, store) => {
  if (store.authModalType === 'signUp') return SignUpContent(self, store)
  if (store.authModalType === 'signIn') return SignInContent(self, store)
  if (store.authModalType === 'forgot') return PasswordReset(self, store)
  return (
    <div>
      Something went wrong...
    </div>
  )
}

/**
 * This modal allows a user to sign up, sign in, and send a password reset email. It lives
 * at the top level of the app and can be triggered from anywhere.
 */
class AuthModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      resetEmailSent: false
    }
  }

  handleSignIn = async (self, store) => {
    let user
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(self.state.email, self.state.password)
      user = res.user
      await this.setState({
        email: '',
        password: ''
      })
      await store.setAuthModalType(null)
    } catch (err) {
      this.setState({ error: err.message })
      return null
    }

    self.props.onSignInSuccess(user)
  }

  handleSignUp = async (self, store) => {
    let user
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(self.state.email, self.state.password)
      user = res.user
      await this.setState({
        email: '',
        password: ''
      })
      await store.setAuthModalType(null)
    } catch (err) {
      this.setState({ error: err.message })
      // prevent execution of the rest of the block
      return null
    }

    self.props.onSignUpSuccess(user)
  }

  // https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email
  handleReset = async (self) => {
    try {
      await firebase.auth().sendPasswordResetEmail(self.state.email)
      this.setState({ resetEmailSent: true })
      self.props.onPasswordResetSuccess()
    } catch (err) {
      this.setState({ error: err.message })
      return null
    }
  }

  render () {
    return (
      <Context.Consumer>
        {store => {
          return (
            <Modal isOpen={store.authModalType} close={() => store.setAuthModalType(null)}>
              <div className='content-container'>
                {ModalContent(this, store)}
              </div>

              <style jsx>{`
                .content-container {
                  height: 300px;
                  width: 200px;
                  display: flex;
                  background-color: white;
                  border-radius: 3px;
                  padding: 10px;
                }
              `}</style>
            </Modal>
          )
        }}
      </Context.Consumer>
    )
  }
}

const noop = () => {}

AuthModal.defaultProps = {
  onPasswordResetSuccess: noop,
  onSignUpSuccess: noop,
  onSignInSuccess: noop
}

export default AuthModal
