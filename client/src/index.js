import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root';
import './styles/sidebar.css';
import './styles/navbar.css';
import './styles/index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
