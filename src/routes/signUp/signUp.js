import React, { PureComponent} from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/index.js';
import { connect } from 'react-redux'; 

import './signUp.css';

class SignUp extends PureComponent {
  constructor(props){
    super(props);
      this.state ={
        email: '',
        password: '',
        name: '',
      };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  tryRegisterAndLogin = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=> {
        this.props.changeStatus();
      })
    .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h1 className="page-title">Witaj Tubersie !</h1>  
              <div className="box-sign-up animated zoomIn">
                    <h2>Zarejestruj się</h2>
                    <input type="text" 
                           name="name" 
                           placeholder="Imię" 
                           required 
                           value={this.state.name}
                           onChange={this.handleChange}
                        />
                    <input type="email" 
                           name="email" 
                           placeholder="Adres mailowy" 
                           required 
                           valute={this.state.email}
                           onChange={this.handleChange}
                        />
                    <input type="password" 
                           name="password" 
                           placeholder="Hasło"  
                           required 
                           value={this.state.password}
                           onChange={this.handleChange}
                        />
                    <button className="input-submit" 
                            type="submit" 
                            value="Zarejestruj się"
                            onClick={this.tryRegisterAndLogin}
                        >
                        Zarejestruj
                    </button> 
                    <Link to='/signIn'>
                          <button className="">
                              Mam już konto
                          </button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
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
      changeStatus: () => dispatch({ type: 'ONLINE'}),
  };
};

export default connect (mapStateToProps,mapDispatchToProps)(SignUp);