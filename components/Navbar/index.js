import React from 'react'
import Link from 'next/link'

class Navbar extends React.Component {
  render () {
    return (
      <nav className='navbar'>
        <Link href='/'>
          <div>
            Logo
          </div>
        </Link>
        <div className='navbar-action-container'>
          Log in?
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
