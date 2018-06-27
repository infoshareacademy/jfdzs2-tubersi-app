import React, { PureComponent} from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';




class SignUp extends PureComponent {
  
  constructor(props){
    super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state ={
        email: '',
        password: '',
        name: '',
      };
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  /*signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }*/

  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h1 className="page-title">Witaj Tubersie !</h1>  
              <div className="box-sign-up animated zoomIn">
                    <form action="/dashboard">
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
                        />
                        <input className="input-submit" 
                               type="submit" 
                               value="Zarejestruj się"
                               valute={this.state.password}
                               onChange={this.handleChange}
                        /> 
                        <Link to='/signIn'><button className="">
                            Mam już konto
                        </button></Link>
                    </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default SignUp;