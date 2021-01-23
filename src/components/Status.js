import React from 'react'
import '../styles/status.css'

const Status = (props) => {
  return (
    <div className="status">
      <div className="name">{props.name}</div>
      <div className="level-tube"></div>
    </div>
  )
}

export default Status
