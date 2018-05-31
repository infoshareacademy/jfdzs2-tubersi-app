import React, { Component } from 'react';
import './signIn.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class SignIn extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
        <h1>SignIn</h1>
       
      </div>
    );
  }
}

export default SignIn;