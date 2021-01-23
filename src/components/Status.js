import React from 'react'
import '../styles/status.css'

const Status = (props) => {
  return (
    <div className="status">
      <div className="name">{props.name}</div>
      <div className="level-tube">
        <div
          className="level-tube-value"
          style={{
            backgroundColor: '#f3701a',
            display: 'flex',
            borderRadius: 20,
            width: `${props.value}%`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Status
