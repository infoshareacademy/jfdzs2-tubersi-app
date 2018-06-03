import React, { Component } from 'react';
import './playlist.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";


class Playlist extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <h1>Playlist</h1>
       
      </div>
    );
  }
}

export default Playlist;