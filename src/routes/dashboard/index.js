import React, { PureComponent} from 'react';
import {AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart, PieChart, Pie,Cell} from 'recharts';

import Layout from '../../components/layout';
import UserAuthorized from '../../components/user-authorised';

import './style.css';

class Dashboard extends PureComponent {

    data = [
        {name: '2018', Logowania: 4000, Rejestracja: 2400, amt: 2400},
        {name: '2019', Logowania: 3000, Rejestracja: 1398, amt: 2210},
        {name: '2020', Logowania: 2000, Rejestracja: 9800, amt: 2290},
        {name: '2021', Logowania: 2780, Rejestracja: 3908, amt: 2000},
        {name: '2022', Logowania: 1890, Rejestracja: 4800, amt: 2181},
        {name: '2023', Logowania: 2390, Rejestracja: 3800, amt: 2500},
        {name: '2024', Logowania: 3490, Rejestracja: 4300, amt: 2100},
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
                                        dataKey="Rejestracja"
                                        stroke="#8884d8"
                                        activeDot={{r: 8}}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="Logowania"
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
                                    dataKey="Rejestracja"
                                    fill="#8884d8" 
                                />
                                <Bar 
                                    dataKey="Logowania"
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
                                    dataKey="value" 
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
                                    dataKey='Logowania'
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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default Dashboard;