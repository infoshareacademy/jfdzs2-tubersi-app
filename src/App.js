import React, { Component} from 'react';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './routes/signIn/signIn';
import SignUp from "./routes/signUp/signUp";
import Layout from './components/layout/layout';
import NotFound from './routes/notFound/notFound.js';

import './App.css';

var statusLogin = true;

const reducer = (
    state = {
        status: 'offline',
    }, action) => {
    switch (action.type) {
        case 'ONLINE':
            statusLogin = true;
            return {
                status: 'online',
            };
        case 'OFFLINE':
            statusLogin = false;
            return {
              status: 'offline',
            }
        default:
            return state;
    }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  state = {
    online: false,
  }

  componentDidMount() {
    console.log(store.dispatch)
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid">
            <div className="row">
              <Switch>
                <Route exact path="/" component={SignUp} /> 
                <Route path="/signIn" component={SignIn}/>
                {statusLogin ?
                  <Route path="/layout" component={Layout}/>
                  :null
                }
                <Route path='*' exact={true} component={NotFound} />
              </Switch>
            </div>
          </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
