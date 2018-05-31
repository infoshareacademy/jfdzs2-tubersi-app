import React, { Component } from 'react';
import './chat.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class Chat extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
        <h1>Chat</h1>
       
      </div>
    );
  }
}

export default Chat;