import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.min.css";
import "./index.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancer(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
