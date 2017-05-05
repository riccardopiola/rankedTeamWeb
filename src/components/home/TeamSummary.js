import React, {Component} from 'react';
import GameSeasonChart from '../charts/GamesSeasonChart';
import './TeamSummary.css';

const DescValueCombo = (props) => {
  return (
    <div className="team-summary-line">
      <div className="team-summary-desc">{props.desc}</div>
      <div className="team-summary-value">{props.value}</div>
    </div>
  )
}

class TeamSummary extends Component {
  render() {
    return (
      <div className="box team-summary">
        <div className="team-summary-col-sx">
          <div className="team-summary-title">Team Summary</div>
          <div className="team-summary-line-container">
            <DescValueCombo desc="games" value="784"/>
            <DescValueCombo desc="winrate" value="50%"/>
            <DescValueCombo desc="barons" value="200"/>
            <DescValueCombo desc="first towers" value="10"/>
            <DescValueCombo desc="pentakills" value="1"/>
            <DescValueCombo desc="quadrakills" value="4"/>
            <DescValueCombo desc="triplekills" value="555"/>
            <DescValueCombo desc="doublekills" value="4783"/>
          </div>
        </div>
        <div className="team-summary-col-dx">
          <GameSeasonChart/>
        </div>
      </div>
    );
  }
}

export default TeamSummary;
