import React from 'react'
import {
  Layout
} from '@corcos/components'

import {
  Head,
  Navbar
} from '../../components'

class Users extends React.Component {
  render () {
    return (
      <>
        <Head />
        <Navbar />
        <Layout>
          User Profile page

          <style jsx>{`
          
          `}</style>
        </Layout>
      </>
    )
  }
}

export default Users
