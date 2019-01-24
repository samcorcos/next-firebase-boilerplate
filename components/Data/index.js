import React from 'react'

/**
 * The goal of this component is to wrap another component and give it some data from the
 * database while maintaining state and bindings and significantly cutting down on
 * boilerplate.
 *
 * This component expects a function
 * See [this article](https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9)
 * for more information on why function-as-child components are awesome for this use case
 *
 * For basic usage of this component, see [this gist](https://gist.github.com/samcorcos/8e58decdaea1181099c22d2e149efdb0)
 *
 * @param {Object} props.query - the reference to the database query. e.g. db.collection('orders')
 * @param {string} props.type - either 'document' or 'collection'
 * @param {function} props.children - props.children must be a function
 */
class Data extends React.Component {
  constructor (props) {
    super(props)
    this.ref = props.query
    this.unsubscribe = null
    this.state = {
      loading: true,
      data: {}
    }
  }

  componentDidMount () {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  onCollectionUpdate = (snap) => {
    if (!this.props.type) throw new Error('Must pass type string of either "collection" or "document".')
    if (this.props.type === 'collection') {
      const temp = {}
      snap.forEach((doc) => {
        temp[doc.id] = {
          id: doc.id,
          ...doc.data()
        }
      })
      this.setState({
        data: temp,
        loading: false
      })
    } else {
      this.setState({
        data: {
          id: snap.id,
          ...snap.data()
        },
        loading: false
      })
    }
  }

  render () {
    return this.props.children(this.state)
  }
}

export default Data
