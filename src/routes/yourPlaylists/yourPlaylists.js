import React, { Component } from 'react';
import './yourPlaylists.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class YourPlaylists extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
        <h1>Lista playlist</h1>
       
      </div>
    );
  }
}

export default YourPlaylists;