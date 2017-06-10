import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import React from 'react';
import CharacterCard from '../components/CharacterCard'

class Game extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h2>Game of Guess Who?</h2>
        <CharacterCard />
      </div>
      )
  }
}

export default Game;