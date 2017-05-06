import React, { Component } from 'react';
import PlayerInfo from './home/PlayerInfo';
import TeamSummary from './home/TeamSummary';
import GamesWinrateChart from './charts/GamesWinrateChart';
import TimestampChart from './charts/TimestampChart';
import ChampionsChartWrapper from './home/ChampionsChartWrapper';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <TeamSummary/>
          <PlayerInfo/>
          <div className="box">
            <GamesWinrateChart/>
          </div>
          <ChampionsChartWrapper/>
          <div className="box">
            <TimestampChart/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
