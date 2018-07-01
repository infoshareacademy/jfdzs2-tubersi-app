import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import App from './App'
import {uploadDataToLocalStorage, downloadStatusFromLocalStorage} from './localStorage.js';

import './index.css';

const reducer = (
  status = {
      status: downloadStatusFromLocalStorage(),
  }, action) => {
  switch (action.type) {
      case 'ONLINE':
          uploadDataToLocalStorage(true, action.email);
          return {
              status: true,
          };
      case 'OFFLINE':
          uploadDataToLocalStorage(false);
          window.location = '/';
      default:
          return status;
  }
};

const store = createStore(
reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));


  
