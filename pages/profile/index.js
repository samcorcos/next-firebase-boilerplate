import React from 'react'

import {
  Head,
  Navbar,
  Layout
} from '../../components'

class Users extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head />
        <Navbar />
        <Layout>
          User Profile page
        </Layout>

        <style jsx>{`
          
        `}</style>
      </React.Fragment>
    )
  }
}

export default Users
