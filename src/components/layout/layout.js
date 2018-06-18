import React, { PureComponent, Fragment} from 'react';
import './layout.css';


import Footer from "../footer/footer";
import Header from "../header/header";
import Menu from "../menu/menu";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from '../../App';

import Chat from '../../routes/chat/chat';
import Dashborad from '../../routes/dashboard/dashboard';
import Player from '../../routes/player/player';
import Playlist from '../../routes/playlist/playlist';
import Search from '../../routes/search/search';
import SearchResults from '../../routes/searchResults/searchResults';
import SignIn from '../../routes/signIn/signIn';
import SignUp from '../../routes/signUp/signUp';
import YourPlaylists from '../../routes/yourPlaylists/yourPlaylists';
import NotFound from '../../routes/notFound/notFound';


class Layout extends PureComponent {
  render() {
    return (
        <BrowserRouter>
        <Fragment>
        <Header/>
          <div className="container-fluid">
            <div className="row">
              <Menu/>
            
              <div className="col-md-10">
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/chat" component={Chat} />
                        <Route exact path="/dashboard" component={Dashborad} />
                        <Route path="/player" component={Player} />
                        <Route path="/playlist" component={Playlist} />
                        <Route path="/search" component={Search} />
                        <Route path="/results" component={SearchResults} />
                        <Route path="/signIn" component={SignIn} />
                        <Route path="/signUp" component={SignUp} />
                        <Route path="/yourPlaylists" component={YourPlaylists} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
              </div>
          </div>
        <Footer/> 
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default Layout;