import React, { PureComponent, Fragment } from 'react';
import './playlist.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class Playlist extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
          <Fragment>
              <Menu/>
              <main>
                <h1>Playlista pojedyncza</h1>
              </main>
              
          </Fragment>
        <Footer/>
      </Fragment>
    );
  }
}

export default Playlist;