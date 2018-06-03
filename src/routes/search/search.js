import React, { Component } from 'react';
import './search.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";


class Search extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <h1>Search</h1>
       
      </div>
    );
  }
}

export default Search;