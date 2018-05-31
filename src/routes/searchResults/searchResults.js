import React, { Component } from 'react';
import './searchResults.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class SearchResults extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
        <h1>Search Results</h1>
       
      </div>
    );
  }
}

export default SearchResults;