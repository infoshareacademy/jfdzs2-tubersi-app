import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 


import UserNotAuthorized from '../../components/user-not-authorized';

import './style.css';

class SignIn extends PureComponent {
  constructor(props){
    super(props);
      this.state = {
        email: '',
        password: '',
      };
  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  }

  tryLogin = (e) => {
    e.preventDefault();
    this.props.firebase.auth()
      .signInWithEmailAndPassword(
        this.state.email, this.state.password
      )
      .then({})
      .then((u)=>{
        this.props.changeStatus(this.state.email);
        const retrievedObject = localStorage.getItem('tubersi');
        var statusTubersi = JSON.parse(retrievedObject);
        
        if(statusTubersi) {
          this.props.setActuallyUser(
              this.props.dataBaseUsers.find((user) => {
                return user.email === statusTubersi.email; 
              })
            )
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        // var errorMessage = error.message;
        
        if (errorCode === 'auth/wrong-password') {
          alert('Hasło jest niepoprawne');
        } 
        else if (errorCode ==='auth/invalid-email'){
          alert('Adres mailowy jest źle podany')
        } 
        else {
          alert('Nie ma takiego użytkownika - już do rejestracji');
        }
        console.log(error);
      })
  }

  render() {
    return (
      <React.Fragment>
        <UserNotAuthorized/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div 
                className="box-sign-in animated zoomIn"
                style={{marginTop: "50px"}}
              >
                <h2>
                  Zaloguj się
                </h2>
                <input 
                  type="text" 
                  name="email" 
                  placeholder="Podaj login lub email" 
                  required
                  value={this.state.email}
                  onChange={this.handleChange} 
                />
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Podaj hasło"  
                  required 
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <input 
                  className="input-submit" 
                  type="submit" 
                  value="Zaloguj"
                  onClick={this.tryLogin}
                /> 
                <Link to='/signup'>
                  <button style={{backgroundColor: "rgb(203, 204, 203)"}}>
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