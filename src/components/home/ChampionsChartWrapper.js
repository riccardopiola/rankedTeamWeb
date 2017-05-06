import React, { Component} from 'react';
import ChampionsChart from '../charts/ChampionsChart';

class ChampionsChartWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'games'
    }
  }
  handleChangePreference(sortBy) {
    this.setState({
      sortBy
    })
  }
  render() {
    const selectedStyle = {
      color: '#f1e6d0',
      backgroundColor: '#c9aa71'
    }
    return (
      <div className="box">
        <div className="chart-header">
          <h4>champions</h4>
          <div className="chart-header-selector">
            <div style={(this.state.sortBy === 'games')? selectedStyle:{}}
              onClick={() => this.handleChangePreference('games')}>
              games
            </div>
            <div style={(this.state.sortBy === 'winrate')? selectedStyle:{}}
              onClick={() => this.handleChangePreference('winrate')}>
              winrate
            </div>
          </div>
        </div>
        <ChampionsChart sortBy={this.state.sortBy}/>
      </div>
    )
  }
}

export default ChampionsChartWrapper;