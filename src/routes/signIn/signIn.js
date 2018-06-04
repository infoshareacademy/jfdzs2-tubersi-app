import React, { PureComponent, Fragment } from 'react';
import './signIn.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class SignIn extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
          <Fragment>
              <Menu/>
              <main>
                <h1>Chat</h1>
              </main>
              
          </Fragment>
        <Footer/>
      </Fragment>
    );
  }
}


export default SignIn;