import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root';
import Navbar from './containers/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './styles/sidebar.css';
import './styles/navbar.css';
import './styles/index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-vis/dist/style.css';
ReactDOM.render(
  <Root>
    <BrowserRouter>
      <div>
        <Navbar />
        <App />
      </div>
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
