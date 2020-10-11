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
import styled from 'styled-components';
import useHeadLine from './HeadLine';

export default function App(){
  const PositionedLink = styled(Link) `
    position: relative;
    float: ${props => props.left ? "left" : "right"};
    display: inline-block;
  `;
  return (
    <header>
      <Router>
        <div
        style={{
          backgroundColor: 'rgba(175, 238, 238, 0.4)'
          }}
          >
            <PositionedLink to={"/"} left = {false}>Home</PositionedLink> <PositionedLink to={"/products"} left = {true}>Products</PositionedLink>
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

