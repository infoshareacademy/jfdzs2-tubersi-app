import React, { PureComponent, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';
import '../../main.css'

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";



class SignUp extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
          <Fragment>
             
              <main>
                <h1 className="page-title">Witaj Tubersie !</h1>
                
                <div className="box-sign-up animated zoomIn">
                  <form action="/dashboard">
                      <h2>Zarejestruj się</h2>
                      <input type="text" name="Name" placeholder="Imię" required />
                      <input type="email" name="email" placeholder="Adres mailowy" required />
                      <input type="password" name="password" placeholder="Hasło"  required />
                      <input className="input-submit" type="submit" value="Zarejestruj się"/> 
                 
                      <Link to='/signIn'><button className="">Mam już konto</button></Link>
                  </form> 

                </div>
              </main>
              
          </Fragment>
        <Footer/>
      </Fragment>
    );
  }
}


export default SignUp;