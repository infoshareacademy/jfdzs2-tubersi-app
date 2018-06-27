import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './signIn.css';
import '../signUp/signUp.css';


class SignIn extends PureComponent {
  constructor(props){
    super(props);
      this.handleChange = this.handleChange.bind(this);
    
      this.state ={
        email: '',
        password: ''
      };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

 /* signin(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((u)=>{})
    .then((u)=>{window.location="/"})
    .catch((error) => {
        console.log(error);
      });
  }
*/
  render() {
    return (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <h1 className="page-title">Witaj Tubersie!</h1>
                    <div className="box-sign-in animated zoomIn">
                      <form action="/dashboard">
                          <h2>Zaloguj się</h2>
                          <input type="text" 
                                 name="Name" 
                                 placeholder="Podaj login" 
                                 required
                                 value={this.state.email}
                                 onChange={this.handleChange} 
                          />
                          <input type="password" 
                                 name="password" 
                                 placeholder="Podaj hasło"  
                                 required 
                                 valute={this.state.password}
                                 onChange={this.handleChange}
                          />
                          <input className="input-submit" 
                                 type="submit" 
                                 value="Zaloguj"
                                 onClick={this.signin}
                          /> 
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