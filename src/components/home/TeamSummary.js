import React, { Component } from 'react';
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
          <DescValueCombo desc="winrate:" value="50%"/>
          <DescValueCombo desc="barons:" value="10"/>
        </div>
        <div className="team-summary-col-dx">
          CHART
          {/*http://recharts.org/#/en-US/examples/CustomActiveShapePieChart*/}
        </div>
      </div>
    );
  }
}

export default TeamSummary;
