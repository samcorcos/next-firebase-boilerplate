import React from 'react'
import Link from 'next/link'
import {
  Button
} from '@corcos/components'
import {
  colors
} from '@corcos/lib'

import Context from '../../lib/context'

const buttonStyle = {
  color: colors.blue[500],
  backgroundColor: 'white',
  boxShadow: 'none',
  border: `1px solid ${colors.blue[500]}`,
  paddingBottom: 8,
  paddingTop: 8
}

const SignUpSignIn = (self) => {
  if (!self.context.currentUser.uid) {
    return (
      <div className='auth-container'>
        <Link href={{ pathname: '/profile', query: { type: 'login' } }}>
          <a className='anchor'>Sign in</a>
        </Link>
        <Link href={{ pathname: '/profile', query: { type: 'signup' } }}>
          <Button style={buttonStyle} onClick={() => {}} title='Sign up' />
        </Link>

        <style jsx>{`
          .anchor {
            cursor: pointer;
            text-decoration: underline;
            transition: all 0.1s ease;
            margin-right: 10px;
          }
          .auth-container {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        `}</style>
      </div>
    )
  }
  return (
    <div>
      <Link href='profile'>
        <a className='profile'>{self.context.currentUser.email}</a>
      </Link>
      <style jsx>{`
        .profile {
          margin-right: 10px;
        }
      `}</style>
    </div>
  )
}

class Navbar extends React.Component {
  static contextType = Context

  render () {
    return (
      <nav className='navbar'>
        <Link href='/'>
          <div className='brand-container'>
            <img src='/static/disco.svg' className='logo' />
            <div className='brand-title'>MyApp</div>
          </div>
        </Link>
        <div className='navbar-action-container'>
          {SignUpSignIn(this)}
        </div>

        <style jsx>{`
          .logo {
            height: 70px;
          }
          .brand-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .brand-title {
            font-size: 30px;
            color: ${colors.grey[800]};
            font-weight: 300;
          }
          .navbar {
            display: flex;
            height: 60px;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            border-bottom: 1px solid ${colors.grey[400]};
          }  
          .navbar-action-container {
            margin-right: 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        `}</style>
      </nav>
    )
  }
}

export default Navbar
