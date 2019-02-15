import React from 'react'
import Link from 'next/link'
import Colors from '@corcos/lib/dist/colors'

import {
  Button
} from '../'

import Context from '../../lib/context'

const SignUpSignIn = (self, store) => {
  if (!store.currentUser.uid) {
    return (
      <div className='auth-container'>
        <a className='anchor' onClick={() => store.setAuthModalType('signIn')}>Sign in</a>
        <Button onClick={() => store.setAuthModalType('signUp')} text='Sign up' />

        <style jsx>{`
          .anchor {
            color: ${Colors.cyan[500]};
            cursor: pointer;
            text-decoration: underline;
            transition: all 0.1s ease;
            margin-right: 10px;
          }
          .anchor:hover {
            color: ${Colors.cyan[200]};
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
        <a className='profile'>{store.currentUser.email}</a>
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
  render () {
    return (
      <nav className='navbar'>
        <Link href='/'>
          <div className='brand-container'>
            <div style={{ marginLeft: 15, height: 40, width: 40, borderRadius: '50%', backgroundColor: 'gray', cursor: 'pointer' }} />
            <div className='brand-title'>My App</div>
          </div>
        </Link>
        <Context.Consumer>
          {store => {
            return (
              <div className='navbar-action-container'>
                {SignUpSignIn(this, store)}
              </div>
            )
          }}
        </Context.Consumer>

        <style jsx>{`
          .brand-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .brand-title {
            padding-left: 10px;
            font-size: 30px;
            color: black;
            font-weight: 300;
          }
          .navbar {
            display: flex;
            height: 60px;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            border-bottom: 1px solid black;
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
