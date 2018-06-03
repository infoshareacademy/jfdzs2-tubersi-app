import React, { Component } from 'react';
import './player.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";


class Player extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <h1>Player</h1>
       
      </div>
    );
  }
}

export default Player;