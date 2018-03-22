import $ from 'jquery';
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
import './styles/index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../node_modules/react-vis/dist/style.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

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
