import React from 'react'
import {
  Data,
  Layout
} from '@corcos/components'

import { db } from '../../lib/firebase'

import {
  Head,
  Navbar
} from '../../components'

// demonstrates how to use the `Data` component

class Users extends React.Component {
  render () {
    return (
      <>
        <Head />
        <Navbar />
        <Layout>
          <div className='users'>
            <h1 className='title'>List of all users</h1>
            <Data query={db.collection('users')} type='collection'>
              {({ loading, data: users }) => {
                return Object.keys(users).map(key => users[key]).map(user => {
                  return (
                    <div key={user.id}>
                      {user.firstName} {user.lastName}
                    </div>
                  )
                })
              }}
            </Data>
          </div>

          <style jsx>{`
            .title {
              font-size: 32px;
              margin-bottom: 5px;
            }
            .users {
              display: flex;
              flex-direction: column;
            }
          `}</style>
        </Layout>
      </>
    )
  }
}

export default Users
