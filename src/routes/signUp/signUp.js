import React, { PureComponent, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';
import Footer from '../../components/footer/footer';

import fire from '../../config/fire';



class SignUp extends PureComponent {
  constructor(props){
    super(props);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
      this.state ={
        email: '',
        password: ''
      };
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }


  render() {
    return (
      <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
          <h1 className="page-title">Witaj Tubersie !</h1>  
          <div className="box-sign-up animated zoomIn">
              <form >
                <h2>Zarejestruj się</h2>
                <input 
                value={this.state.email}
                onChange={this.handleChange}
                type="email" 
                name="email" 
                placeholder="Podaj adres email" 
                />

                <input 
                valute={this.state.password}
                onChange={this.handleChange}
                type="password" 
                name="password" 
                placeholder="Podaj hasło"  
                />

              
                <button
                onClick={this.signup}>
                Zarejestruj się</button>
                
                <Link to='/signIn'>
                <button className="">Mam już konto</button></Link>
              </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

      </Fragment>
   

     
    );
  }
}


export default SignUp;