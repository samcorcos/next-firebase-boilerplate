import React from 'react'

/**
 * A standard input component
 *
 * @param {string} value - the value of the controlled component
 * @param {string} type - determines the input type (default: text)
 * @param {function} onChange - determines what happens when a value changes
 */
class Input extends React.Component {
  render () {
    return (
      <div className='container'>
        {this.props.label && <label>{this.props.label}</label>}
        <input
          type={this.props.type}
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)} />

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            margin-top: 5px;
            margin-bottom: 5px;
          }
        `}</style>
      </div>
    )
  }
}

Input.defaultProps = {
  onChange: (text) => { console.error('Missing onChange prop: ', text) },
  label: '',
  type: 'text'
}

export default Input
