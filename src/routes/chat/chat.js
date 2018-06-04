import React, { PureComponent, Fragment } from 'react';
import './chat.css';
import '../../main.css'

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class Chat extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
          <Fragment>
              <Menu/>
              <div className="main">
                <h1>Chdsfsdfdsdat</h1>
              </div>
              
          </Fragment>
        <Footer/>
      </Fragment>
    );
  }
}

export default Chat;