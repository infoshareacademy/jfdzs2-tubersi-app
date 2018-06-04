import React, { PureComponent, Fragment } from 'react';
import './dashboard.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class Dashboard extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
          <Fragment>
              <Menu/>
              <main>
                <h1>Wykresy</h1>
              </main>
              
          </Fragment>
        <Footer/>
      </Fragment>
    );
  }
}


export default Dashboard;