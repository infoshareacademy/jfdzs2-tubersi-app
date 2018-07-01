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

import './App.css';

class App extends Component {
  render() {
    return (  
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/chat" component={Chat} />
          <Route path="/player" component={Player} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/search" component={Search} />
          <Route path="/your-playlist" component={YourPlaylists} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
