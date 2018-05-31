import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';

import Chat from './routes/chat/chat';
import Dashborad from './routes/dashboard/dashboard';
import Player from './routes/player/player';
import Playlist from './routes/playlist/playlist';
import Search from './routes/search/search';
import SearchResults from './routes/searchResults/searchResults';
import SignIn from './routes/signIn/signIn';
import SignUp from './routes/signUp/signUp';
import YourPlaylists from './routes/yourPlaylists/yourPlaylists';
import NotFound from './routes/notFound/notFound';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/chat" component={Chat} />
            <Route path="/dashboard" component={Dashborad} />
            <Route path="/player" component={Player} />
            <Route path="/playlist" component={Playlist} />
            <Route path="/search" component={Search} />
            <Route path="/results" component={SearchResults} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/yourPlaylists" component={YourPlaylists} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

