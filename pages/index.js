import React from 'react'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'

class Index extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        foobar
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
})

export default compose(
  firebaseConnect(),
  connect(mapStateToProps)
)(Index)
