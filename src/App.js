import React, { Component } from 'react';
import './App.css';

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/> 
      </div>
    );
  }
}

export default App;
