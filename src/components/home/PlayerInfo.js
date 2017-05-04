import React, { Component } from 'react';
import PlayerInfoSmall from './PlayerInfoSmall';
import './Player.css';

const PlayerTabInfo = () => {
  return (
    <div className="player-small">
      <div className="player-small-tab" style={{width: "64px"}}></div>
      <div className="player-small-tab" style={{width: "225px"}}>Current Name</div>
      <div className="player-small-tab" style={{width: "225px"}}>Previous Name</div>
      <div className="player-small-tab" style={{width: "200px"}}>Roles</div>
      <div className="player-small-tab" style={{width: "200px"}}>Games</div>
      <div className="player-small-tab" style={{width: "110px"}}></div>
    </div>
  )
}

class PlayerInfo extends Component {
  render() {
    return (
      <div className="box player-small-container">
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
