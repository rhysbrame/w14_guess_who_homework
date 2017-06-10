import React from 'react'
import { render } from 'react-dom'
// import ReactDOM from 'react-dom'
import Game from './containers/Game.jsx'
import Main from './containers/Main.jsx'
import Scores from './containers/Scores.jsx'
import League from './containers/League.jsx'

import { HashRouter, Route } from 'react-router-dom'

window.onload = () => {
  render(
    <HashRouter>
      <div>
        <Route path='/' component={Main} />
        <Route path='/game' component={Game} />
        <Route path='/scores' component={Scores} />
        <Route path='/league' component={League} />
      </div>
    </HashRouter>,
    document.getElementById('app')
  );
}

