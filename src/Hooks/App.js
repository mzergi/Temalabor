import React from 'react';
import './App.css';
import MainPage from '../Pages/MainPage';
import ProductPage from '../Pages/ProductPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import useHeadLine from './HeadLine';

export default function App(){
  return (
    <header>
      <div>{useHeadLine("Z's Webshop")}</div>
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
    </header>
  );
}

