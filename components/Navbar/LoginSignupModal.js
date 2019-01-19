import React from 'react'

import firebase from '../../lib/firebase'

import {
  Input,
  Modal
} from '../'

class LoginSignupModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: ''
    }
  }

  handleSignup = async (state) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password)
      await this.setState({
        email: '',
        password: ''
      })
    } catch (err) {
      this.setState({ error: err.message })
      // prevent execution of the rest of the block
      return null
    }
  }

  render () {
    return (
      <Modal isOpen={this.props.isOpen} close={this.props.close}>
        <div className='content-container'>
          {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
          <h3>Sign up now</h3>
          <Input
            label='Email'
            value={this.state.email}
            onChange={t => this.setState({ email: t })} />
          <Input
            label='Password'
            type='password'
            value={this.state.password}
            onChange={t => this.setState({ password: t })} />

          <button onClick={() => this.handleSignup(this.state)}>
            Sign up
          </button>
        </div>

        <style jsx>{`
          .content-container {
            height: 300px;
            width: 200px;
            display: flex;
            flex-direction: column;
            background-color: white;
            border-radius: 3px;
            padding: 10px;
          }
        `}</style>
      </Modal>
    )
  }
}

export default LoginSignupModal
