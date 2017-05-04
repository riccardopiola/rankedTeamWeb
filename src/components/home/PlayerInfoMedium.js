import React, { Component } from 'react';

class PlayerInfoMedium extends Component {
  render() {
    return (
      <div className="player-medium box">
        <div className="player-inner">
          <img className="player-icon" alt="playericon"
            src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/588.png"
          />
          <div>
            <h3 className="player-name">rickypiola97</h3>
            <h4 className="player-role">ADC</h4>
            <h5 className="player-games">800 games</h5>
          </div>
          <button className="to-player-page-button">DETAILS</button>
        </div>
      </div>
    );
  }
}

export default PlayerInfoMedium;
