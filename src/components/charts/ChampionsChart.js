import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts';
import sortDataForChart from '../../utils/sortDataForChart';
import getChampionName from '../../utils/getChampionName';

const fakeData = [
  { champion: 266, games: 120, winrate: 50 },
  { champion: 103, games: 300, winrate: 60 },
  { champion: 1, games: 700, winrate: 45 },
  { champion: 2, games: 800, winrate: 35 },
  { champion: 3, games: 650, winrate: 48 },
  { champion: 4, games: 400, winrate: 55 },
  { champion: 5, games: 50, winrate: 50 },
];

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;
  const link = `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${payload.value}.png`;
  return (
    <g transform={`translate(${x},${y})`}>
      <image xlinkHref={link} x="-45" y="-20" height="40px" width="40px" />
    </g>
  );
};

const CustomTooltip = (props) => {
  if (props.active) {
    const { payload, label } = props;
    return (
      <div className="chart-tooltip-container">
        <div className="chart-tooltip-label">{label}</div>
        {payload.map((thisPayload, index) => {
          if (typeof thisPayload.unit === 'undefined')
            thisPayload.unit = '';
          return (
            <div className="chart-tooltip-line" key={index}>
              <div style={{ color: thisPayload.fill }}>{thisPayload.name + ':'}</div>
              <div style={{ color: '#eae0d8' }}>{thisPayload.value + thisPayload.unit}</div>
            </div>
          )
        })}
      </div>
    )
  }
  return null;
}



class ChampionsChart extends Component {
  constructor(props) {
    super(props);
    const data = fakeData;
    this.state = {
      data,
      sortBy: props.sortBy
    };
    this.processData = this.processData.bind(this);
  }
  componentWillMount() {
    this.processData();
  }
  processData(sortBy = this.state.sortBy) {
    let sortedData = sortDataForChart(this.state.data, sortBy);
    if (sortedData.some(element => typeof element.champion === 'number')) {
      sortedData = sortedData.map(obj => {
        obj.champion = getChampionName(obj.champion);
        return obj;
      })
    }
    this.setState({
      data: sortedData
    });
  }
  componentWillReceiveProps(nextProps) {
    this.processData(nextProps.sortBy);
    this.forceUpdate();
  }
  render() {
    return (
      <BarChart width={1024} height={500} data={this.state.data} layout="vertical"
        margin={{ top: 10, right: 15, left: 15, bottom: 5 }}>
        <YAxis dataKey="champion" type="category" tick={<CustomizedAxisTick />} />
        <XAxis xAxisId="top" orientation="top" stroke="#896c3d" domain={[0, 'dataMax + 25']} type="number" />
        <XAxis xAxisId="bottom" orientation="bottom" stroke="#f1e6d0" domain={[0, 100]} unit="%" type="number" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar xAxisId="top" dataKey="games" fill="#896c3d" name="GAMES"
          maxBarSize={(this.props.sortBy === 'games') ? 20 : 5}>
          {
            this.state.data.map((entry, index) => (
              <Cell key={`cell-${index}`} stroke={"#121212"} strokeWidth={1} />
            ))
          }
        </Bar>
        <Bar xAxisId="bottom" dataKey="winrate" fill="#f1e6d0" unit={'%'} name="WINRATE"
          maxBarSize={(this.props.sortBy === 'winrate') ? 20 : 5}>
          {
            this.state.data.map((entry, index) => (
              <Cell key={`cell-${index}`} stroke={"#121212"} strokeWidth={1} />
            ))
          }
        </Bar>
      </BarChart>
    );
  }
}

export default ChampionsChart;