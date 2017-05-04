import React, { Component } from 'react';

class PlayerInfoSmall extends Component {
  render() {
    return (
      <div className="player-small">
        <div className="player-icon-wrapper-small">
          <img className="player-icon player-icon-small" alt="playericon"
            src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/588.png"
          />
        </div>
        <div className="player-name-small">RICKYPIOLA97</div>
        <div className="player-name-small"></div>
        <div className="player-role-small">ADC</div>
        <div className="player-role-small player-games-small">800 GAMES</div>
        <div className="player-button-wrapper-small">
          <button className="to-player-page-button player-button-small">DETAILS</button>
        </div>
      </div>
    );
  }
}

export default PlayerInfoSmall;
