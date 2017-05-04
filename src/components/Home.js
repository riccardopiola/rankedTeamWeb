import React, { Component } from 'react';
import PlayerInfo from './home/PlayerInfo';
import TeamSummary from './home/TeamSummary';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <TeamSummary/>
          <PlayerInfo/>
        </div>
      </div>
    );
  }
}

export default Home;
