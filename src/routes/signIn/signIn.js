import React, { Component } from 'react';
import './signIn.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";


class SignIn extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <h1>SignIn</h1>
       
      </div>
    );
  }
}

export default SignIn;