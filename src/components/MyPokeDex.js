import React from 'react'
import Card from './Card'
import '../styles/my-pokedex.css'

const MyPokeDex = (props) => {
  return (
    <div>
      <div className="header">My Pokedex</div>
      <div className="my-card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default MyPokeDex
