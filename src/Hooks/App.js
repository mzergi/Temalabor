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
    <h>
      <Router>
        <div
        style={{
          padding: 0.2,
          backgroundColor: 'rgba(175, 238, 238, 0.4)'
          }}
          >
            <PositionedLink to={"/home"} left = {false}>Home</PositionedLink> <PositionedLink to={"/products"} left = {true}>Products</PositionedLink>
            {useHeadLine("Z's Webshop")}
          </div>
          <div>
          <Switch>
            <Route exact path="/products">
              <ProductPage />
            </Route>
            <Route exact path="/home">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </h>
  );
}

