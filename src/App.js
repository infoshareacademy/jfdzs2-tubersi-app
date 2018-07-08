import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FadeIn from 'react-fade-in';

import SignIn from './routes/signIn';
import SignUp from "./routes/signUp";
import Chat from './routes/chat';
import Dashboard from './routes/dashboard';
import Player from './routes/player';
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
      actuallyUser: null,
      dataBaseChat: null,
      playerAcitve: false,
      playListActually: null,
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

  setActuallyUser = (actuallyUser) => {
    this.setState({
      actuallyUser
    })
  }

  loadDataBaseChat = (dataBaseChat) => {
    this.setState({
      dataBaseChat,
    })
  }

  activeVideoAndSetPlayList = (playerAcitve, playListActually) => {
    this.setState({
      playerAcitve, 
      playListActually,
    })
  }

  render() {
    return ( 
      <React.Fragment> 
        {this.state.playerAcitve ?
          <FadeIn>
            <Player
              playListActually = {this.state.playListActually}
              activeVideoAndSetPlayList = {this.activeVideoAndSetPlayList}
            />
          </FadeIn>
          :
          null
        }
        <Firebase 
          setReferenceFirebase = {this.setReferenceFirebase}
          loadDataBaseUsers = {this.loadDataBaseUsers}
          setActuallyUser = {this.setActuallyUser}
          loadDataBaseChat = {this.loadDataBaseChat}
        />
        <BrowserRouter>
          <Switch>
            <Route 
              exact path="/"  
              render={() => <Dashboard />} 
            />
            <Route 
              exact path="/signin" 
              render={() => <SignIn 
                firebase = {this.state.firebase} 
                setActuallyUser = {this.setActuallyUser}
                dataBaseUsers = {this.state.dataBaseUsers}
              />} 
            />
            <Route 
              exact path="/signup" 
              render={() => <SignUp 
                firebase = {this.state.firebase} 
                setActuallyUser = {this.setActuallyUser}
              />} 
            />
            <Route path="/chat" render={() => <Chat  
              firebase = {this.state.firebase}
              dataBaseChat = {this.state.dataBaseChat}
              actuallyUser = {this.state.actuallyUser}
              />}   
            />
            <Route path="/search"  render={() => <Search 
              actuallyUser = {this.state.actuallyUser} 
              firebase = {this.state.firebase}
              />}  
            />
            <Route 
              path="/your-playlist" 
              render={() => <YourPlaylists 
                  actuallyUser = {this.state.actuallyUser} 
                  firebase = {this.state.firebase}
                  dataBaseUsers = {this.state.dataBaseUsers}
                  activeVideoAndSetPlayList = {this.activeVideoAndSetPlayList}
                  playListActually = {this.state.playListActually}
                />} 
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
