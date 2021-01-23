import React from 'react'
import Status from './Status'
import cuteIcon from '../cute.png'
import '../styles/card.css'
import {
  calDamageLevel,
  calHappinessLevel,
  calHpLevel,
  calStrLevel,
  calWeakLevel,
} from '../utils/status'
import { COLORS } from '../App'

const Card = (props) => {
  const hp = calHpLevel(props.data.hp)
  const str = calStrLevel(props.data.attacks ? props.data.attacks.length : 0)
  const weak = calWeakLevel(
    props.data.weaknesses ? props.data.weaknesses.length : 0
  )
  const damage = calDamageLevel(
    props.data.attacks ? props.data.attacks.map((attack) => attack.damage) : []
  )
  const happiness = calHappinessLevel(hp, damage, weak)

  const renderHappiness = (amount = 0) => {
    const size = 30
    const list = [...Array(amount).keys()]
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
    <div
      className="card"
      style={{
        backgroundColor: COLORS[props.data.type],
      }}
    >
      <img
        className="pokemon-img"
        src={props.data.imageUrl}
        width={178}
        height={250}
        alt="Card Image"
      />
      <div className="detail">
        <div className="pokemon-name">{props.data.name}</div>
        <div>
          <Status name="HP" value={hp} />
          <Status name="STR" value={str} />
          <Status name="WEAK" value={weak} />
        </div>
        <div className="happiness">{renderHappiness(happiness)}</div>
      </div>
      <div className="action-button" onClick={props.onClickAction}>
        {props.actionLabel}
      </div>
    </div>
  )
}

export default Card
