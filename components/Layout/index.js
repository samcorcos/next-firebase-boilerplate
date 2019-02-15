import React from 'react'
import {
  extraLarge,
  medium,
  small
} from '@corcos/lib/dist/mediaQueries'

class Layout extends React.Component {
  render () {
    return (
      <section className='layout'>
        <div className='section'>
          {this.props.children}
        </div>

        <style jsx>{`
          .layout {
            display: flex;
            flex-direction: column;
            background-color: white;
            align-items: center;
            flex: 1;
          }
          .section {
            width: 1080px;
            padding-top: 30px;
            padding-bottom: 100px;
          }
          @media ${medium} {
            .section {
              max-width: 750px;
            }
          }
          @media ${small} {
            .section {
              max-width: 90vw;
              padding-top: 50px ;
              padding-bottom: 50px;
            }
          }
          @media ${extraLarge} {
            .section {
              width: calc(90vw - 240px);
            }
          }
        `}</style>
      </section>
    )
  }
}

export default Layout
