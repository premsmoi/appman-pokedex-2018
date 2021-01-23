import React from 'react'
import '../styles/bottom-bar.css'

const BottomBar = (props) => {
  return (
    <div className="bottom-bar">
      <div className="add-button" onClick={props.openModal}>
        <div className="text">+</div>
      </div>
    </div>
  )
}

export default BottomBar
