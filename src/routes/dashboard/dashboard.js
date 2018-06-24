import React, { PureComponent} from 'react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart, PieChart, Pie, Cell } from 'recharts';
import './dashboard.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;

// var apiHost = "https://tubersi-score-game.firebaseio.com";
// nie mam dostępu!

class Dashboard extends PureComponent {

    data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ];

    data2 = [
        {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
        {name: 'Group C', value: 300}, {name: 'Group D', value: 200}
    ];

    componentDidMount(){

    }

    render() {
    return (
      <div className="content container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <h1>dashboard</h1>
          <p>lorem ibsum ble bl ble ble</p>
            <div className="chartbackground col-xs-12 col-md-5 col-md-offset-2">
                <LineChart width={500} height={300} data={this.data}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className="chartbackground col-xs-12 col-md-5">
                <BarChart width={500} height={300} data={this.data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className="chartbackground col-xs-12 col-md-5 col-md-offset-2">
                <PieChart width={500} height={300} onMouseEnter={this.onPieEnter} >
                    <Pie
                        data={this.data2}
                        cx={250}
                        cy={110}
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {
                            this.data2.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                        }
                    </Pie>
                </PieChart>
            </div>
            <div className="chartbackground col-xs-12 col-md-5">
                <AreaChart width={500} height={300} data={this.data}
                           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
                </AreaChart>
            </div>
        </div>
      </div>
    </div>
    );
  }
}


export default Dashboard;