import React from 'react'
import Link from 'next/link'

import {
  Consumer
} from '../../components'

import LoginSignupModal from './LoginSignupModal'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalType: null
    }
  }

  render () {
    return (
      <nav className='navbar'>
        <Link href='/'>
          <div>
            Logo
          </div>
        </Link>
        <div className='navbar-action-container'>
          <div>
            <Link href='/contacts'>
              Contacts
            </Link>
          </div>
          <Consumer>
            {global => {
              if (global.currentUser.uid) {
                return (
                  <div>{global.currentUser.email}</div>
                )
              }
              return (
                <button onClick={() => this.setState({ modalType: 'signup' })}>
                  Sign up
                </button>
              )
            }}
          </Consumer>
          <LoginSignupModal isOpen={this.state.modalType} close={() => this.setState({ modalType: null })} />
        </div>

        <style jsx>{`
         .navbar {
            height: 60px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
