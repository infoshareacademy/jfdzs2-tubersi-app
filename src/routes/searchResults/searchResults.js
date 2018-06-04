import React, { PureComponent, Fragment } from 'react';
import './searchResults.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class SearchResults extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
          <Fragment>
              <Menu/>
              <main>
                <h1>Wyniki wyszukiwania...</h1>
              </main>
              
          </Fragment>
        <Footer/>
      </Fragment>
    );
  }
}

export default SearchResults;