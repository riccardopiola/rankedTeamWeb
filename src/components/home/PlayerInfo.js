import React, { Component } from 'react';
import PlayerInfoSmall from './PlayerInfoSmall';
import './Player.css';

const PlayerTabInfo = () => {
  return (
    <div className="player-small">
      <div className="player-small-tab" style={{width: "54px"}}></div>
      <div className="player-small-tab" style={{width: "180px"}}>Current Name</div>
      <div className="player-small-tab" style={{width: "180px"}}>Previous Name</div>
      <div className="player-small-tab" style={{width: "150px"}}>Roles</div>
      <div className="player-small-tab" style={{width: "120px"}}>Games</div>
      <div className="player-small-tab" style={{width: "110px"}}></div>
    </div>
  )
}

class PlayerInfo extends Component {
  render() {
    return (
      <div className="player-small-container box">
        <PlayerTabInfo/>
        <div className="golden-separator"/>
        <PlayerInfoSmall/>
        <div className="golden-separator"/>
        <PlayerInfoSmall/>
      </div>
    );
  }
}

export default PlayerInfo;
