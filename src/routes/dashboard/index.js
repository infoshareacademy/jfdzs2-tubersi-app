import React, { PureComponent} from 'react';
import { AreaChart, 
         Area, 
         LineChart, 
         Line, 
         XAxis, 
         YAxis, 
         CartesianGrid, 
         Tooltip, 
         Legend, 
         Bar, 
         BarChart, 
         PieChart, 
         Pie,
         Cell
       } from 'recharts';
import Layout from '../../components/layout';
import UserAuthorized from '../../components/user-authorised';

import './style.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;

// var apiHost = "https://tubersi-score-game.firebaseio.com";
// nie mam dostępu!

class Dashboard extends PureComponent {

    data = [
        {name: 'Page A', zielony: 4000, fiolet: 2400, amt: 2400},
        {name: 'Page B', zielony: 3000, fiolet: 1398, amt: 2210},
        {name: 'Page C', zielony: 2000, fiolet: 9800, amt: 2290},
        {name: 'Page D', zielony: 2780, fiolet: 3908, amt: 2000},
        {name: 'Page E', zielony: 1890, fiolet: 4800, amt: 2181},
        {name: 'Page F', zielony: 2390, fiolet: 3800, amt: 2500},
        {name: 'Page G', zielony: 3490, fiolet: 4300, amt: 2100},
    ];

    data2 = [
        {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
        {name: 'Group C', value: 300}, {name: 'Group D', value: 200}
    ];

    render() {
    return (
        <Layout>
            <UserAuthorized />
            <div className="container ">
                <div className="row main-margin">
                        <div className="displey-content col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="chart-background">
                                <LineChart
                                    width={450}
                                    height={250}
                                    data={this.data}
                                    margin={{
                                        top: 20,
                                        right:  20,
                                        left: 20,
                                        bottom: 20
                                    }}
                                >
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="fiolet"
                                        stroke="#8884d8"
                                        activeDot={{r: 8}}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="zielony"
                                        stroke="#82ca9d"
                                    />
                                </LineChart>
                            </div>
                        </div>
                    <div className="displey-content col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="chart-background">
                            <BarChart
                                width={450}
                                height={250}
                                data={this.data}
                                margin={{
                                    top: 20,
                                    right:  20,
                                    left: 20,
                                    bottom: 20
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend />
                                <Bar 
                                    dataKey="fiolet"
                                    fill="#8884d8" 
                                />
                                <Bar 
                                    dataKey="zielony"
                                    fill="#82ca9d" 
                                />
                            </BarChart>
                        </div>
                        </div>
                    <div className="displey-content col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="chart-background">
                            <PieChart
                                width={450}
                                height={250}
                                onMouseEnter={this.onPieEnter} 
                            >
                                <Pie
                                    data={this.data2}
                                    fill="#8884d8"
                                    label
                                >
                                    {
                                        this.data2.map((entry, index) => 
                                            <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                                    }
                                </Pie>
                            </PieChart>
                        </div>
                        </div>
                    <div className="displey-content col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="chart-background">
                            <AreaChart
                                width={450}
                                height={250}
                                data={this.data}
                                margin={{
                                    top: 20,
                                    right:  20,
                                    left: 20,
                                    bottom: 20
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Area 
                                    type='monotone' 
                                    dataKey='zielony'
                                    stroke='#8884d8' 
                                    fill='#8884d8' 
                                />
                            </AreaChart>
                        </div>
                        </div>
                    </div>
            </div>
        </Layout>
    );
  }
}


export default Dashboard;