import React, { Component } from 'react';
import './playlist.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class Playlist extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
        <h1>Playlist</h1>
       
      </div>
    );
  }
}

export default Playlist;