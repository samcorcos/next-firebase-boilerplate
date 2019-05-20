import React from 'react'
import {
  colors
} from '@corcos/lib'

import {
  Layout
} from '../../components'

class Footer extends React.Component {
  render () {
    return (
      <footer className='outer'>
        <div className='inner'>
          <Layout>
            Footer
          </Layout>
        </div>

        <style jsx>{`
          .outer {
            min-height: 300px;
            padding-top: 100px;
            background-color: ${colors.grey[100]};
            padding-bottom: 50px;
          }  
        `}</style>
      </footer>
    )
  }
}

export default Footer
