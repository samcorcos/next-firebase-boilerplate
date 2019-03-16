import React from 'react'
import {
  colors
} from '@corcos/lib'
import {
  Layout
} from '@corcos/components'

import {
  Head,
  Format,
  Navbar
} from '../components'

class Home extends React.Component {
  render () {
    return (
      <>
        <Head />
        <Format />
        <Navbar />
        <div className='landing'>
          <Layout>
            <div className='title-col'>
              <h1 className='title'>
                MyApp is a great app
              </h1>
              <h2 className='subtitle'>
                It does some really cool stuff
              </h2>
            </div>
          </Layout>
        </div>

        <style jsx>{`
          .title-col {
            align-items: center;
            justify-content: center;
            flex: 1;
          }
          .landing {
            min-height: 600px;
            border-bottom: 1px solid ${colors.grey[400]};
          } 
          .title {
            font-size: 42px;

          } 
          .subtitle {
            font-size: 24px;
            color: ${colors.grey[600]};
          }
        `}</style>
      </>
    )
  }
}

export default Home
