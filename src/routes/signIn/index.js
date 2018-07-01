import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import fire from '../../config/index.js';

import UserNotAuthorized from '../../components/user-not-authorized';

import './style.css';
import '../signUp/style.css';

class SignIn extends PureComponent {
  constructor(props){
    super(props);
      this.state ={
        email: '',
        password: '',
      };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  tryLogin = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then({})
    .then((u)=>{
      this.props.changeStatus(this.state.email);
    })
    .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
              <UserNotAuthorized/>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <h1 className="page-title">Witaj Tubersie!</h1>
                    <div className="box-sign-in animated zoomIn">
                        <h2>Zaloguj się</h2>
                        <input type="text" 
                               name="email" 
                               placeholder="Podaj login lub email" 
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
                               onClick={this.tryLogin}
                          /> 
                        <Link to='/signup'>
                          <button className="">
                            Wroc
                          </button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
              </React.Fragment>
    );
  }
}
const mapStateToProps = status => {
  return {
      status,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      changeStatus: (email) => dispatch({ type: 'ONLINE', email}),
  };
};

export default connect (mapStateToProps,mapDispatchToProps)(SignIn);