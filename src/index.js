import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Provider, Middleware } from 'redux';
// anything in Provider has access to redux store
// Middleware incorporate thunk with our store
import thunk from 'redux-thunk';

import App from './App';


// set up store, import provider to use redux


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
