import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, Cell } from 'recharts';
import sortDataForChart from '../../utils/sortDataForChart';

const fakeData = [
      {name: 'rickypiola97', games: 120, winrate: 50},
      {name: 'iBrolyGG', games: 300, winrate: 60},
      {name: 'bbak', games: 700, winrate: 45},
      {name: 'Apdo Padawan', games: 800, winrate: 35},
      {name: 'qt squirrel v666', games: 650, winrate: 48},
      {name: 'Monkey D Agu', games: 400, winrate: 55},
      {name: 'Nonno Laser',games: 50, winrate: 50},
];

const CustomizedAxisTick = (props) => {
  const {x, y, payload} = props;
 	return (
  	<g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#999" transform="rotate(-35)">{payload.value}</text>
    </g>
  );
};
const CustomTooltip = (props) => {
  if (props.active) {
    const { payload, label } = props;
    return(
      <div className="chart-tooltip-container">
        <div className="chart-tooltip-label">{label}</div>
        {payload.map((thisPayload, index) => {
          if (typeof thisPayload.unit === 'undefined')
            thisPayload.unit = '';
          return (
            <div className="chart-tooltip-line" key={index}>
              <div style={{color: thisPayload.fill}}>{thisPayload.name + ':'}</div>
              <div style={{color: '#eae0d8'}}>{thisPayload.value + thisPayload.unit}</div>
            </div>
          )
        })}
      </div>
    )
  }
  return null;
}



class GamesWinrateChart extends Component {
  constructor(props) {
    super(props);
    const data = fakeData;
    this.state = {
      data
    }
    this.processData = this.processData.bind(this);
  }
  componentWillMount() {
    this.processData();
  }
  componentWillReceiveProps(newProps) {
    this.processData(newProps.data);
  }
  processData(data = this.state.data) {
    let sortedData = sortDataForChart(data, 'games');
    //TODO: Change the nameId to SummonerName similiar to ChampionsChart.js
    this.setState({
      data: sortedData
    });
  }
	render () {
  	return (
      <BarChart width={1024} height={300} data={this.state.data}
          margin={{top: 20, right: 15, left: 15, bottom: 5}}>
        <XAxis dataKey="name" tick={<CustomizedAxisTick/>} height={100}/>
        <YAxis yAxisId="left" orientation="left" stroke="#896c3d" domain={[0, 'dataMax + 50']}/>
        <YAxis yAxisId="right" orientation="right" stroke="#f1e6d0" domain={[0, 100]} unit="%"/>
        <Tooltip content={<CustomTooltip/>}/>
        <Legend />
        <Bar yAxisId="left" dataKey="games" fill="#896c3d" name="GAMES">
        {
          this.state.data.map((entry, index) => (
            <Cell key={`cell-${index}`} stroke={"#121212"}  strokeWidth={1}/>
          ))
        }
        </Bar>
        <Bar yAxisId="right" dataKey="winrate" fill="#f1e6d0" unit={'%'} name="WINRATE">
        {
          this.state.data.map((entry, index) => (
            <Cell key={`cell-${index}`} stroke={"#121212"}  strokeWidth={1}/>
          ))
          }
        </Bar>
      </BarChart>
    );
  }
}

export default GamesWinrateChart;