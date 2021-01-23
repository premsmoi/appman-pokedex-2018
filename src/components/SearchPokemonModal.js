import React from 'react'
import searchicon from '../search.png'
import '../styles/modal.css'
import Card from './Card'

const SearchPokemonModal = (props) => {
  return (
    <div className={`${props.isModalOpen ? 'modal-overlay' : ''}`}>
      <div
        className={`modal ${props.isModalOpen ? 'show' : 'hide'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-box">
          <input type="text" placeholder="Find pokemon" />
          <img
            className="search-icon"
            src={searchicon}
            width={50}
            height={50}
          />
        </div>

        <div className="search-result">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default SearchPokemonModal
