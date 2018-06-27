import React, { Component} from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './routes/signIn/signIn';
import SignUp from "./routes/signUp/signUp";
import Layout from './components/layout/layout';



class App extends Component {

  render() {
    return (
      // <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
        {/* <Switch> */}
          <Layout/>
        {/* <Route exact path="/" component={Layout} /> */}
        {/* <Route path="/signIn" component={SignIn}/>
        <Route path="/signUp" component={SignUp}/> */}
        {/* </Switch>             */}
        </div>
      </div>
    // </BrowserRouter>
    );
  }
}

export default App;
