import $ from 'jquery';
import '../node_modules/react-vis/dist/style.css';
import 'bootstrap';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './styles/sidebar.css';
import './styles/navbar.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(reduxThunk))
);

$(document).ready(function() {
  $("#toggle-button").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
