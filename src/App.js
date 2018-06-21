import React, { Component} from 'react';
import './App.css';
import Layout from "./components/layout/layout"

import fire from "./config/fire";
import SignUp from "./routes/signUp/signUp";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './routes/signIn/signIn';

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
        <BrowserRouter>
          <div className="container-fluid">
            <div className="row">
          
            <Switch>
            <Route path="/signIn" component={SignIn}/>
            {this.state.user ? (<Layout/>) : (<SignUp/>)}
            <Route path="/signUp" component={SignUp}/>
            </Switch>            
            </div>
          </div>
        </BrowserRouter>
        
   
    );
  }
}

export default App;
