import React from 'react'
import {
  colors
} from '@corcos/lib'
import {
  Input,
  Button,
  Layout
} from '@corcos/components'
import Link from 'next/link'
import { withRouter } from 'next/router'

import firebase from '../../lib/firebase'
import Context from '../../lib/context'

/**
 * This component is used on the profile page to allow a user to sign up
 */
class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      terms: false,
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  static contextType = Context

  _handleSubmit = async () => {
    if (!/@/g.test(this.state.email)) {
      window.alert('Invalid email address')
      return null
    }
    if (!this.state.terms) {
      window.alert('Must accept terms and conditions')
      return null
    }
    if (this.state.password.length < 8) {
      window.alert('Password must be at least 8 characters')
      return null
    }
    if (!(this.state.password === this.state.passwordConfirm)) {
      window.alert('Passwords do not match')
      return null
    }

    // if all checks pass, create a new user
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
      await this.setState({
        email: '',
        password: '',
        passwordConfirm: ''
      })
      this.props.router.push('/')
    } catch (err) {
      this.setState({ error: err.message })
      // prevent execution of the rest of the block
      return null
    }
  }

  render () {
    return (
      <>
        <Layout>
          <div className='content'>
            <div className='title'>
              Create Account
            </div>
            <Input value={this.state.email} onChange={v => this.setState({ email: v })} placeholder='Email Address' />
            <Input type='password' value={this.state.password} onChange={v => this.setState({ password: v })} placeholder='Password' />
            <div className='chars'>
              Must be at least 8 characters
            </div>
            <Input type='password' value={this.state.passwordConfirm} onChange={v => this.setState({ passwordConfirm: v })} placeholder='Confirm Password' />
            <div style={{ height: 10 }} />
            <Button title='Sign Up' onClick={this._handleSubmit} />
            <div className='terms-row'>
              <input checked={this.state.terms} onChange={e => this.setState({ terms: e.target.checked })} type='checkbox' className='checkbox' />
              <div className='terms'>
                I agree to the&nbsp;<Link href='#'><a>Terms and Conditions</a></Link>
              </div>
            </div>
            <div className='line' />
            <div className='has-account'>
              Already have an account?&nbsp;<a onClick={() => this.context.set('signUpOrLogIn', 'logIn')}>Log in</a>
            </div>
          </div>

          <style jsx>{`
            .has-account {
              flex-direction: row;
              text-align: center;
              justify-content: center;
              padding-top: 30px;
              color: ${colors.grey[400]};
            }
            .line {
              border-bottom: 1px solid ${colors.grey[300]};
              width: 100%;
              padding-top: 30px;
            }
            .checkbox {
              margin-right: 10px;
            }
            .terms-row {
              flex-direction: row;
              padding-top: 15px;
            }
            .terms {
              flex-direction: row;
              color: ${colors.grey[400]};
            }
            .chars {
              font-size: 12px;
              padding-bottom: 10px;
              color: ${colors.grey[400]};
            }
            .title {
              margin-top: 30px;
              color: ${colors.grey[800]};
              margin-bottom: 30px;
              font-size: 42px;
              text-align: center;
              font-weight: 500;
            }
            .content {
              width: 360px;
              align-self: center;
            }
          `}</style>
        </Layout>
      </>
    )
  }
}

export default withRouter(Signup)
