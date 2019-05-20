import React from 'react'
import { colors, elevation } from '@corcos/lib'

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
        {this.props.label && <label className='label'>{this.props.label}</label>}
        <input
          onBlur={() => this.props.onBlur()}
          onFocus={() => this.props.onFocus()}
          ref={ref => this.props.setRef(ref)}
          placeholder={this.props.placeholder}
          className='input'
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
          .input {
            border: 1px solid ${colors.grey[200]};
            border-radius: 3px;
            background-color: white;
            outline: none;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 15px;
            padding-right: 3px;
            font-size: 16px;
            transition: all 0.2s ease;
          }
          .input:hover {
            box-shadow: ${elevation[1]};
          }
          .input:focus {
            box-shadow: ${elevation[1]};
          }
          input::placeholder {
            color: ${colors.grey[400]};
          }
          .label {
            color: ${colors.grey[600]};
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    )
  }
}

Input.defaultProps = {
  onChange: (text) => { console.error('Missing onChange prop: ', text) },
  label: '',
  type: 'text',
  setRef: () => {},
  onBlur: () => {},
  onFocus: () => {}
}

export default Input
