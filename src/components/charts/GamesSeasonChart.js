import React from 'react';
import { PieChart, Pie, Cell, Sector } from 'recharts'; 

const mockData = [
  { name: 'Season 3', value: 100},
  { name: 'Season 4', value: 200},
  { name: 'Season 5', value: 300},
  { name: 'Season 6', value: 50}
];

const COLORS = ['#896c3d', '#c9aa71', '#eae0d8', '#544a31'];

const ACTIVE_INDEX_SETTING = 1;

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fillPredef, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const fill = COLORS[ACTIVE_INDEX_SETTING];

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#999">{`${value} GAMES`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const GamesSeasonChart = (props) => {
  const data = mockData;
  return (
    <PieChart
      width={501}
      height={278}
      margin={{top: 35, right: 125, bottom: 35, left: 125}}
    >
      <Pie
        activeIndex={ACTIVE_INDEX_SETTING}
        activeShape={renderActiveShape}
        fill={'#999'}
        data={data}
        innerRadius={50}
        outerRadius={80}
      >
        {data.map((entry, index) => {
          return <Cell 
              fill={COLORS[index % COLORS.length]}
              key={index}/>
          })}
      </Pie>
    </PieChart>
  )
}

export default GamesSeasonChart;