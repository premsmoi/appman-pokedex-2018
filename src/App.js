import React, { Component } from 'react'
import './App.css'
import SearchPokemonModal from './components/SearchPokemonModal'
import BottomBar from './components/BottomBar'
import MyPokeDex from './components/MyPokeDex'

export const COLORS = {
  Psychic: '#f8a5c2',
  Fighting: '#f0932b',
  Fairy: '#c44569',
  Normal: '#f6e58d',
  Grass: '#badc58',
  Metal: '#95afc0',
  Water: '#3dc1d3',
  Lightning: '#f9ca24',
  Darkness: '#574b90',
  Colorless: '#FFF',
  Fire: '#eb4d4b',
}

class App extends Component {
  state = {
    isModalOpen: false,
    myCards: [],
  }

  onOpenModal = () => {
    this.setState({ isModalOpen: true })
  }

  onCloseModal = () => {
    if (this.state.isModalOpen === true) {
      this.setState({ isModalOpen: false })
    }
  }

  onRemoveMyCard = (id) => {
    const myCards = this.state.myCards.filter((card) => card.id !== id)
    this.setState({ myCards })
  }

  onAddMyCard = (card) => {
    const myCards = [...this.state.myCards]
    myCards.push(card)
    this.setState({ myCards })
  }

  getMyCardIds = () => {
    return this.state.myCards.map((card) => card.id)
  }

  render() {
    return (
      <div className="App" onClick={this.onCloseModal}>
        <MyPokeDex
          cards={this.state.myCards}
          removeMyCard={this.onRemoveMyCard}
        />
        <BottomBar openModal={this.onOpenModal} />
        {this.state.isModalOpen && (
          <SearchPokemonModal
            myCardIds={this.getMyCardIds()}
            closeModal={this.onCloseModal}
            addMyCard={this.onAddMyCard}
          />
        )}
      </div>
    )
  }
}

export default App
