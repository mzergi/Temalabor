import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Hooks/App';
import * as serviceWorker from './serviceWorker';
import Cart from './Components/Cart';
import Spinner from 'react-bootstrap/Spinner';

var cart = new Cart();
ReactDOM.render(
  <React.StrictMode>
    <App cart = {cart} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
