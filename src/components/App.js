import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import './charts/charts.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Link className="link" to="/">
            <img src="https://cdn.leagueoflegends.com/riotbar/prod/1.6.61/images/navigation/icon-game-lol.png?1493242078" alt="logo"/>
          </Link>
          <div className="header-title">I NEGRI DELLA ZONA</div>
          <div>SEASON</div>
        </header>
        <div className="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
