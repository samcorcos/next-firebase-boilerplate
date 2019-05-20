import React from 'react'
import { colors, elevation } from '@corcos/lib'
/**
 * Standard button component with basic styling
 *
 * @param {Object} style - style overrides
 * @param {function} onClick - the function to run when the button is clicked
 * @param {string} title - the title to display with the button
 * @param {boolean} disabled - determines whether or not the button is disabled
 */
class Button extends React.Component {
  render () {
    const { onClick, style, disabled, title, color } = this.props

    return (
      <div
        style={style}
        onClick={e => onClick(e)}
        className={`button ${disabled && 'disabled'}`}>
        <div className='title'>{title}</div>

        <style jsx>{`
          .button {
            user-select: none;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left: 20px;
            padding-right: 20px;
            background-color: ${color};
            transition: all 0.1s ease;
            box-shadow: ${elevation[1]};
            border-radius: 3px;
            white-space: nowrap;
            width: auto;
            cursor: pointer;
          }  
          .disabled {
            pointer-events: none;
            background-color: ${colors.grey[300]};
          }
          .button:hover {
            opacity: 0.8;
          }
          .title {
            color: ${style.color || 'white'};
            font-size: 16px;
          }
        `}</style>
      </div>
    )
  }
}

Button.defaultProps = {
  onClick: () => console.warn('You may have forgotten to include an event on button click...'),
  title: 'Submit',
  style: {},
  disabled: false,
  color: colors.blue[400]
}

export default Button
