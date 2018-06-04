import React, { PureComponent, Fragment } from 'react';
import './player.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class Player extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
          <Fragment>
              <Menu/>
              <main>
                <h1>Player</h1>
              </main>
              
          </Fragment>
        <Footer/>
      </Fragment>
    );
  }
}


export default Player;