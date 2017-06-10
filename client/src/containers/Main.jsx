import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
  
  render() {

    return (
      <div>
        <h4>Guess Not!</h4>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/scores">Scores</Link></li>
          <li><Link to="/league">League</Link></li>
        </ul>
      </div>
    )
  };

};

export default Main