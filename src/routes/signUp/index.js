import React, { PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

import UserNotAuthorized from '../../components/user-not-authorized';

import './style.css';

class SignUp extends PureComponent {
  constructor(props){
    super(props);
      this.state = {
        email: '',
        password: '',
        name: '',
      };
      this.errorContain = null;
  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    });
    this.errorContain.innerHTML = '';
  }

  tryRegisterAndLogin = (e) => {
    e.preventDefault();
    this.props.firebase.auth()
      .createUserWithEmailAndPassword(
        this.state.email, this.state.password
      )
      .then((u)=> {})
      .then((u)=> {
        this.props.changeStatus(this.state.email);
        this.createNewUser();
      })
      .catch((error) => {
        var errorCode = error.code;
        if (errorCode === 'auth/weak-password') {
          this.errorContain.innerHTML = 'Hasło powinno mieć min. 6 znaków'
        } else if (errorCode ==='auth/invalid-email') {
            this.errorContain.innerHTML = 'Adres mailowy jest źle podany'
        } else if (errorCode === 'auth/email-already-in-use'){
            this.errorContain.innerHTML = 'Jest już taki użytkownik'
        }
        console.log(error);
      })
  }

  createNewUser(userDataBase) {
    var usersDatabase = this.props.firebase.database().ref('users');
    var data = {
      name: this.state.name,
      email: this.state.email,
    }
    usersDatabase.push(data);
  }

  render() {
    return (
        <React.Fragment>
          <UserNotAuthorized/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-md-offset-3"> 
                <div 
                  className="box-sign-up animated zoomIn"
                  style={{marginTop: "50px"}}
                  >
                  <h2>Zarejestruj się</h2>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Imię" 
                    required 
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Adres mailowy" 
                    required 
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <input 
                    type="password" 
                    name="password" 
                    placeholder="Hasło min. 6 znaków"  
                    required 
                    pattern=".{6,}"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <div
                      className="error-info"
                      ref={(e) => {this.errorContain = e;}}
                  />
                  <button 
                    className="input-submit" 
                    type="submit" 
                    value="Zarejestruj się"
                    onClick={this.tryRegisterAndLogin}
                  >
                    Zarejestruj
                  </button> 
                  <Link to='/signIn'>
                    <button style={{backgroundColor: "rgb(203, 204, 203)"}}>
                      Mam już konto
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
      changeStatus: (email) => dispatch({ type: 'ONLINE', email }),
  };
};

export default connect (mapStateToProps,mapDispatchToProps)(SignUp);