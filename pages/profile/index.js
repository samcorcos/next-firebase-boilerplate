import React from 'react'
import {
  Layout
} from '@corcos/components'

import {
  Head,
  Format,
  Navbar
} from '../../components'
import Signup from '../../components/Signup'
import Login from '../../components/Login'
import Context from '../../lib/context'

class Users extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      signUpOrLogIn: props.query.type
    }
  }

  static contextType = Context

  static getInitialProps = ({ query }) => {
    return { query }
  }

  render () {
    return (
      <>
        <Head />
        <Format />
        <Navbar />
        <Signup />
        <Login />
        <Layout>
          Other?
        </Layout>
      </>
    )
  }
}

export default Users
