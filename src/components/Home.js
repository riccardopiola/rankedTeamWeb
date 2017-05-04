import React, { Component } from 'react';
import PlayerInfo from './home/PlayerInfo';
import './home/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="player-medium-container">
          </div>
          <PlayerInfo/>
        </div>
      </div>
    );
  }
}

export default Home;
