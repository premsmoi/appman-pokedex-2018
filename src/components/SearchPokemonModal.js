import React, { useEffect, useState } from 'react'
import searchicon from '../search.png'
import '../styles/modal.css'
import Card from './Card'

const SearchPokemonModal = (props) => {
  const [searchNameInput, setSearchNameInput] = useState('')
  const [searchTypeInput, setSearchTypeInput] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [readyToRender, setReadyToRender] = useState(false)

  useEffect(() => {
    if (!props.isModalOpen) {
      setReadyToRender(false)
      return
    }
    onSearch()
  }, [props.isModalOpen])

  useEffect(() => {
    const cards = searchResult
    filterOwnedCards(cards)
  }, [props.myCardIds])

  const filterOwnedCards = (cards) => {
    cards = cards.filter((card) => !props.myCardIds.includes(card.id))
    setSearchResult(cards)
  }

  const onSearch = () => {
    fetch(
      `http://localhost:3030/api/cards?limit=30&name=${searchNameInput}&type=${searchTypeInput}`
    )
      .then((response) => response.json())
      .then((result) => {
        const cards = result.cards
        filterOwnedCards(cards)
        setReadyToRender(true)
      })
  }

  return (
    props.isModalOpen &&
    readyToRender && (
      <div className={`${props.isModalOpen ? 'modal-overlay' : ''}`}>
        <div
          className={`modal ${props.isModalOpen ? 'show' : 'hide'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="search-box">
            <input
              type="text"
              placeholder="Pokemon name"
              value={searchNameInput}
              onChange={(e) => setSearchNameInput(e.target.value)}
            />
            <input
              type="text"
              placeholder="Pokemon Type"
              value={searchTypeInput}
              onChange={(e) => setSearchTypeInput(e.target.value)}
            />
            <img
              className="search-icon"
              src={searchicon}
              width={50}
              height={50}
              onClick={onSearch}
            />
          </div>

          <div className="search-result">
            {searchResult.map((card) => (
              <Card
                data={card}
                onClickAction={() => props.addMyCard(card)}
                actionLabel="Add"
              />
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default SearchPokemonModal
