import React, { Component } from 'react';
import './dashboard.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
        <h1>Dashboard</h1>
       
      </div>
    );
  }
}

export default Dashboard;