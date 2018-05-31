import React, { Component } from 'react';
import './notFound.css';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class NotFound extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
        <h1>bład 404</h1>
       
      </div>
    );
  }
}

export default NotFound;