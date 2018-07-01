import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import App from './App'
import './index.css';

const reducer = (
  state = {
      status: false,
  }, action) => {
  switch (action.type) {
          case 'ONLINE':
            return {
              status: true,
          };
      case 'OFFLINE':
          window.location = '/';
      default:
          return state;
  }
};

const store = createStore(
reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
    , document.getElementById('root'));

