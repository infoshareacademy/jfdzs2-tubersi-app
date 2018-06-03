import React, { Component } from 'react';
import './App.css';

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";


class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/> 
      </div>
    );
  }
}

export default App;
