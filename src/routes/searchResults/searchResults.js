import React, { Component } from 'react';
import './searchResults.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";

class SearchResults extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <h1>Search Results</h1>
       
      </div>
    );
  }
}

export default SearchResults;