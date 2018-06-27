import React, { Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'; 

import SignIn from './routes/signIn/signIn';
import SignUp from "./routes/signUp/signUp";
import Layout from './components/layout/layout';
import NotFound from './routes/notFound/notFound.js';

import './App.css';

class App extends Component {
  render() {
    return (  
      <BrowserRouter>
          <div className="container-fluid">
            <div className="row">
              <Switch>
                <Route exact path="/" component={SignUp} /> 
                <Route path="/signIn" component={SignIn}/>
                <Route path="/layout" component={Layout}/>
                <Route path='*' exact={true} component={NotFound} />
              </Switch>
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = status => {
  return {
      status,
  };
};

export default connect (mapStateToProps)(App);
