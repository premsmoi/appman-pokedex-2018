import React from 'react'
import Card from './Card'
import '../styles/my-pokedex.css'

const MyPokeDex = (props) => {
  return (
    <div>
      <div className="header">My Pokedex</div>
      <div className="my-card-list">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            data={card}
            onClickAction={() => props.removeMyCard(card.id)}
            actionLabel="X"
          />
        ))}
      </div>
    </div>
  )
}

export default MyPokeDex
