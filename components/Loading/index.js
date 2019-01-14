import React from 'react'

const Loading = props => {
  if (!props.loading) return null
  return (
    <div
      className='loading'
      onClick={e => e.stopPropagation()}>
      <img
        alt='loading spinner'
        src='https://s3-us-west-2.amazonaws.com/cardash-static-assets/loading-spinner%3F1491586958135.gif' />
      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
          position: fixed;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          background-color: rgba(255, 255, 255, 0.5);
          z-index: 1000;
          transform: translate3d(0, 0, 0);
        }  
      `}</style>
    </div>
  )
}

Loading.defaultProps = {
  loading: false
}

export default Loading
