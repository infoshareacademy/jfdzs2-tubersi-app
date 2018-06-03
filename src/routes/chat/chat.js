import React, { Component } from 'react';
import './chat.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";


class Chat extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <h1>Chat</h1>
       
      </div>
    );
  }
}

export default Chat;