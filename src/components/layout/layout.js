import React, { PureComponent, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Footer from "../footer/footer";
import Header from "../header/header";
import Menu from "../menu/menu";

import Chat from '../../routes/chat/chat';
import Dashborad from '../../routes/dashboard/dashboard';
import Player from '../../routes/player/player';
import Playlist from '../../routes/playlist/playlist';
import Search from '../../routes/search/search';
import YourPlaylists from '../../routes/yourPlaylists/yourPlaylists';
import NotFound from '../../routes/notFound/notFound.js';

import './layout.css';

class Layout extends PureComponent {
  constructor(props, context){
    super(props, context);

    this.state ={
        visible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this)
}

handleClick(e){
  this.toggleMenu();
}

toggleMenu() {
  this.setState(
    {visible: !this.state.visible}
  )
}
  render() {
    return (
        <BrowserRouter>
        <Fragment>
          <Header handleClick={this.handleClick}/>
          <Menu handleClick={this.handleClick} menuVisibility={this.state.visible}/>
          <div className="layout">
            <Switch>
              <Route exact path="/" component={Dashborad}/>
              <Route exact path="/signIn" component={Dashborad}/>
              <Route path="/chat" component={Chat} />
              <Route path="/player" component={Player} />
              <Route path="/playlist" component={Playlist} />
              <Route path="/search" component={Search} />
              <Route path="/yourPlaylists" component={YourPlaylists} />
              <Route path="*" component={NotFound}/>
            </Switch>
          </div> 
        <Footer/>
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default Layout;