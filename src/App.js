import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignIn from './routes/signIn';
import SignUp from "./routes/signUp";
import Chat from './routes/chat';
import Dashboard from './routes/dashboard';
import Player from './routes/player';
import Playlist from './routes/playlist';
import Search from './routes/search';
import YourPlaylists from './routes/yourPlaylists';
import NotFound from './routes/notFound';
import Firebase from './components/firebase';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebase: null,
      dataBaseUsers: null,
    }
  }

  setReferenceFirebase = (firebase) => {
    this.setState({
      firebase,
    })
  }

  loadDataBaseUsers = (dataBaseUsers) => {
    this.setState({
      dataBaseUsers,
    })
  }

  render() {
    return ( 
      <React.Fragment> 
        <Firebase 
          setReferenceFirebase = {this.setReferenceFirebase}
          loadDataBaseUsers = {this.loadDataBaseUsers}
        />
        <BrowserRouter>
          <Switch>
            <Route 
              exact path="/"  
              render={() => <Dashboard />} 
            />
            <Route 
              exact path="/signin" 
              render={() => <SignIn firebase = {this.state.firebase} />} 
            />
            <Route 
              exact path="/signup" 
              render={() => <SignUp firebase = {this.state.firebase} />} 
            />
            <Route path="/chat" component={Chat} />
            <Route path="/player" component={Player} />
            <Route path="/playlist" component={Playlist} />
            <Route path="/search" component={Search} />
            <Route 
              path="/your-playlist" 
              render={() => <YourPlaylists dataBaseUsers = {this.state.dataBaseUsers} />} 
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
