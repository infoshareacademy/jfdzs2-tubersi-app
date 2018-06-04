import React, { PureComponent, Fragment} from 'react';
import './signUp.css';


import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";


class SignUp extends PureComponent {
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


export default SignUp;