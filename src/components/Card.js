import React from 'react'
import Status from './Status'
import cuteIcon from '../cute.png'
import '../styles/card.css'

const Card = (props) => {
  const renderHappiness = (amount) => {
    const size = 30
    const list = [...Array(amount).keys()]
    console.log(list)
    return (
      <>
        {list.map((key) => (
          <img
            className="cute-img"
            key={key}
            src={cuteIcon}
            alt="Cute Icon"
            width={size}
            height={size}
          />
        ))}
      </>
    )
  }

  return (
    <div className="card">
      <img
        className="pokemon-img"
        src={props.data.imageUrl}
        width={178}
        height={250}
      />
      <div className="detail">
        <div className="pokemon-name">{props.data.name}</div>
        <div>
          <Status name="HP" value="" />
          <Status name="STR" value="" />
          <Status name="WEAK" value="" />
        </div>
        <div className="happiness">{renderHappiness(6)}</div>
      </div>
      <div className="action-button" onClick={props.onClickAction}>
        {props.actionLabel}
      </div>
    </div>
  )
}

export default Card
