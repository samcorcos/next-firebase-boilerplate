import React from 'react'
import Colors from '@corcos/lib/dist/colors'
import Elevation from '@corcos/lib/dist/elevation'

class Button extends React.Component {
  render () {
    return (
      <div
        onClick={e => this.props.onClick(e)}
        className='button'>
        <div className='text'>{this.props.text}</div>

        <style jsx>{`
          .button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            background-color: ${Colors.grey[600]};
            transition: all 0.1s ease;
            box-shadow: ${Elevation[1]};
            border-radius: 3px;
            white-space: nowrap;
            padding-left: 20px;
            padding-right: 20px;
            cursor: pointer;
          }  
          .button:hover {
            background-color: ${Colors.grey[500]};
          }
          .text {
            color: white;
            font-size: 16px;
          }
        `}</style>
      </div>
    )
  }
}

Button.defaultProps = {
  onClick: () => console.warn('You may have forgotten to include an event on button click...'),
  text: 'Submit'
}

export default Button
