import React from 'react'

import {
  Head,
  Format,
  Layout,
  Navbar
} from '../../components'
import Signup from '../../components/Signup'
import Login from '../../components/Login'

import Context from '../../lib/context'

// determines what to render if the user is not logged in
const SignUpOrLogIn = (self) => {
  if (self.context.signUpOrLogIn === 'logIn') {
    return <Login {...self.props} />
  }
  if (self.context.signUpOrLogIn === 'forgot') {
    return <div>Forgot</div>
  }
  return <Signup {...self.props} />
}

// determines what to render depending on whether or not the user is logged in
const LoginStatus = (self) => {
  if (self.context.currentUser.uid) {
    return <div>logged in</div>
  }
  return SignUpOrLogIn(self)
}

class Users extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static getInitialProps = ({ query }) => {
    return { query }
  }

  static contextType = Context

  render () {
    return (
      <Format>
        <Head />
        <Navbar />
        {LoginStatus(this)}
        <Layout>
          User Profile page
          {this.context.signUpOrLogIn}

          <style jsx>{`
          
          `}</style>
        </Layout>
      </Format>
    )
  }
}

export default Users
