import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './signIn.css';
import '../signUp/signUp.css';




class SignIn extends PureComponent {
  render() {
    return (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <h1 className="page-title">Witaj Tubersie!</h1>
                    <div className="box-sign-in animated zoomIn">
                      <form action="/dashboard">
                          <h2>Zaloguj się</h2>
                          <input type="text" name="Name" placeholder="Podaj login" required />
                          <input type="password" name="password" placeholder="Podaj hasło"  required />
                          <input className="input-submit" type="submit" value="Zaloguj"/> 
                          <Link to='/signUp'><button className="">Wroc</button></Link>
                      </form> 
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}


export default SignIn;