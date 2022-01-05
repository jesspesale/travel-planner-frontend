import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// anything in Provider has access to redux store
// applyMiddleware incorporate thunk with our store
// compose allows us to combine middlewares into one so we can pass one argument to createStore
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import tripReducer from './reducers/tripReducer';
import itineraryReducer from './reducers/itineraryReducer';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({itinerary_items: itineraryReducer, trips: tripReducer, packing_items: tripReducer})

// set up store, import provider to use redux
// let store = createStore(tripReducer, composeEnhancers(applyMiddleware(thunk)))

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => {
  console.log("store changed", store.getState())
})

ReactDOM.render(
  <Provider store = {store}>
      <Router>
        <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);



//We send (dispatch) an action object to our reducer and it takes that object and deiced
//what we want to update about our current store and return a new version of that store