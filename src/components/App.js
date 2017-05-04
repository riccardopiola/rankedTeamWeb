import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src="https://cdn.leagueoflegends.com/riotbar/prod/1.6.61/images/navigation/icon-game-lol.png?1493242078" alt="logo"/>
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
