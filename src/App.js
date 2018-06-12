import React, { Component} from 'react';
import './App.css';

import Dashborad from "./routes/dashboard/dashboard";

import fire from "./config/fire";

import SignUp from "./routes/signUp/signUp";


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
             {this.state.user ? (<Dashborad/>) : (<SignUp/>)}
            </div>
          </div>
   
    );
  }
}

export default App;
