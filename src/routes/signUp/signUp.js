import React, { Component } from 'react';
import './signUp.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Main from "../../components/main/main";


class SignUp extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <h1>SignUp</h1>
       
      </div>
    );
  }
}

export default SignUp;