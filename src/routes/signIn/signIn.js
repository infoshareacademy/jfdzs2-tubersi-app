import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/fire';

import './signIn.css';
import '../signUp/signUp.css';

class SignIn extends PureComponent {
  constructor(props){
    super(props);
      this.signin = this.signin.bind(this);
      this.handleChange = this.handleChange.bind(this);
    
      this.state ={
        email: '',
        password: ''
      };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  signin(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }



  render() {
    return (
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h1 className="page-title">Witaj Tubersie!</h1>
          <div className="box-sign-in animated zoomIn">
            <form>
            <h2>Zaloguj się</h2>
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
            onClick={this.signin}
            type="submit"
            className="input-submit">
            Zaloguj</button>

            <Link to='/signUp'>
                <button className="">Powrót do rejestacji</button></Link>
          
            </form> 
          </div>
         </div>
       </div>
      </div>
    );
  }
}


export default SignIn;