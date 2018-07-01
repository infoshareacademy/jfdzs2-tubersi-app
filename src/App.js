import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignIn from './routes/signIn/signIn';
import SignUp from "./routes/signUp/signUp";
import Chat from './routes/chat/chat';
import Dashboard from './routes/dashboard/dashboard';
import Player from './routes/player/player';
import Playlist from './routes/playlist/playlist';
import Search from './routes/search/search';
import YourPlaylists from './routes/yourPlaylists/yourPlaylists';
import NotFound from './routes/notFound/notFound.js';


import './App.css';

class App extends Component {
  render() {
    return (  
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/chat" component={Chat} />
          <Route path="/player" component={Player} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/search" component={Search} />
          <Route path="/your-playlist" component={YourPlaylists} />
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
