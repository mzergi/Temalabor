import React from 'react';
import './App.css';
import MainPage from '../Components/MainPage';
import ProductPage from '../Components/ProductPage';
import PageHandler from './PageHandler';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/products">
            <ProductPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

