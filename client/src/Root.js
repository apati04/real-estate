import React from 'react';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  { auth: { authenticated: localStorage.getItem('token') } },
  composeEnhancer(applyMiddleware(reduxThunk))
);

export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
