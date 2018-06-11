import React, { Component} from 'react';
import './App.css';

import Dashborad from "./routes/dashboard/dashboard";
import SignIn from "./routes/signIn/signIn";
import fire from "./config/fire";


class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       user: {},
     }
   }

   componentDidMount(){
     this.authListener();
   }

   authListener() {
     fire.auth().onAuthStateChanged((user) =>{
       if (user){
         this.setState({ user });
       } else {
         this.setState( { user: null });
       }
     });
   }


  render() {
    return (
    
          <div className="container-fluid">
            <div className="row">             
             {this.state.user ? (<Dashborad/>) : (<SignIn/>)}
            </div>
          </div>
   
    );
  }
}

export default App;
