import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
// anything in Provider has access to redux store
// applyMiddleware incorporate thunk with our store
// compose allows us to combine middlewares into one so we can pass one argument to createStore
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// set up store, import provider to use redux
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);



//We send (dispatch) an action object to our reducer and it takes that object and deiced
//what we want to update about our current store and return a new version of that store