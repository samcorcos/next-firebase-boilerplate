import React from 'react'

const DefaultContent = () => (
  <div className='modal-content'>
    Modal is open
    <style jsx>{`
    .modal-content {
        height: 300px;
        width: 200px;
        display: flex;
        background-color: white;
        border-radius: 3px;
      }
    `}</style>
  </div>
)

const onClick = (e, close) => {
  e.stopPropagation()
  close()
}

class Modal extends React.Component {
  render () {
    return (
      <div
        className={this.props.isOpen ? 'modal-open' : 'modal-close'}
        onClick={e => onClick(e, this.props.close)}>
        <div onClick={e => e.stopPropagation()}>
          {this.props.children || DefaultContent()}
        </div>

        <style jsx>{`
          .modal-open {
            background-color: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-close {
            display: none;
          }
        `}</style>
      </div>
    )
  }
}

Modal.defaultProps = {
  isOpen: false,
  // children: DefaultContent,
  close: () => {}
}

export default Modal
