import React, { Component } from 'react'
import './App.css'
import SearchPokemonModal from './components/SearchPokemonModal'
import BottomBar from './components/BottomBar'
import MyPokeDex from './components/MyPokeDex'

const COLORS = {
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
  }

  onOpenModal = () => {
    this.setState({ isModalOpen: true })
  }

  onCloseModal = () => {
    if (this.state.isModalOpen === true) {
      this.setState({ isModalOpen: false })
    }
  }

  render() {
    return (
      <div className="App" onClick={this.onCloseModal}>
        <MyPokeDex />
        <BottomBar openModal={this.onOpenModal} />
        <SearchPokemonModal
          closeModal={this.onCloseModal}
          isModalOpen={this.state.isModalOpen}
        />
      </div>
    )
  }
}

export default App
