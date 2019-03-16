import React from 'react'
import {
  colors
} from '@corcos/lib'
import {
  Layout,
  Input,
  Button
} from '@corcos/components'
import Link from 'next/link'
import { withRouter } from 'next/router'

import firebase from '../../lib/firebase'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      keep: false,
      email: '',
      password: ''
    }
  }

  _handleSubmit = async () => {
    if (!/@/g.test(this.state.email)) {
      window.alert('Invalid email address')
      return null
    }
    if (!this.state.password) {
      window.alert('Missing password')
      return null
    }

    // if all checks pass, create a new user
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
      await this.setState({
        email: '',
        password: ''
      })
      this.props.router.push('/dashboard')
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
              Welcome Back
            </div>
            {this.state.error && <div className='error'>{this.state.error}</div>}
            <Input value={this.state.email} onChange={v => this.setState({ email: v })} placeholder='Email Address' />
            <Input type='password' value={this.state.password} onChange={v => this.setState({ password: v })} placeholder='Password' />
            <div className='forgot' onClick={() => window.alert('coming soon!')}>
              Forgot your password?
            </div>
            <div style={{ height: 10 }} />
            <Button title='Log in' onClick={this._handleSubmit} />
            <div className='keep-row'>
              <input checked={this.state.keep} onChange={e => this.setState({ keep: e.target.checked })} type='checkbox' className='checkbox' />
              <div className='keep'>
                Keep me signed in
              </div>
            </div>
            <div className='line' />
            <div className='has-account'>
              Don't have an account yet?&nbsp;<Link href='/signup'><a>Create one</a></Link>
            </div>
          </div>

          <style jsx>{`
            .error {
              color: ${colors.red[700]};
            }
            .has-account {
              flex-direction: row;
              text-align: center;
              justify-content: center;
              padding-top: 30px;
              color: ${colors.grey[400]};
            }
            .forgot {
              color: ${colors.blue[500]};
              font-size: 12px;
              padding-bottom: 10px;
              cursor: pointer;
            }
            .line {
              border-bottom: 1px solid ${colors.grey[300]};
              width: 100%;
              padding-top: 30px;
            }
            .checkbox {
              margin-right: 10px;
            }
            .keep-row {
              flex-direction: row;
              padding-top: 15px;
            }
            .keep {
              flex-direction: row;
              color: ${colors.grey[400]};
            }
            .chars {
              font-size: 12px;
              padding-bottom: 10px;
              color: ${colors.grey[400]};
            }
            .title {
              font-size: 42px;
              margin-bottom: 30px;
              color: ${colors.grey[800]};
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

export default withRouter(Login)
