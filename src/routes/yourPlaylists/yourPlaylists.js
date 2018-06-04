import React, {PureComponent, Fragment } from 'react';
import './yourPlaylists.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class YourPlaylists extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
          <Fragment>
              <Menu/>
              <main>
                <h1>Twoj playlista o nazwie....</h1>
              </main>
              
          </Fragment>
        <Footer/>
      </Fragment>
    );
  }
}

export default YourPlaylists;