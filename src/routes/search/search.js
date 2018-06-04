import React, { PureComponent, Fragment } from 'react';
import './search.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class Search extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
          <Fragment>
              <Menu/>
              <main>
                <h1>Szukaj</h1>
              </main>
              
          </Fragment>
        <Footer/>
      </Fragment>
    );
  }
}


export default Search;