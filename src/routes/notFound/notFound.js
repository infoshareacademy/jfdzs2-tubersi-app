import React, { Component } from 'react';
import './notFound.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";


class NotFound extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <h1>bład 404</h1>
       
      </div>
    );
  }
}

export default NotFound;