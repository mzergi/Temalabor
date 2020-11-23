import React from "react";
import "./App.css";
import MainPage from "../Pages/MainPage";
import ProductPage from "../Pages/ProductPage";
import Cart from "../Components/Cart";
import CartComponent from "../Components/CartComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import useHeadLine from "./HeadLine";
import CartPage from '../Pages/CartPage';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button} from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'

export default function App(props) {
  const PositionedLink = styled(Link)`
    position: relative;
    float: ${(props) => (props.left ? "left" : "right")};
    padding: 10px;
    display: inline-block;
  `;
  return (
    <body class = "body-dark">
      <Router>
        <Navbar
          bg="dark"
          variant="dark"
        >
          <Nav className="container-fluid">
            <Nav.Item>
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </Nav.Item>
            <Nav.Item className = "ml-auto text-on-dark-navbar">
              <h5>Z's Webshop</h5>
            </Nav.Item>
            <Nav.Item className = "ml-auto">
              <Link to={"/cart"}>
                <Button variant = "primary">
                    <FaShoppingCart/>
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        <div>
          <Switch>
            <Route exact path="/products">
              <ProductPage cart={props.cart} />
            </Route>
            <Route exact path="/cart">
              <CartPage cart={props.cart} />
            </Route>
            <Route exact path="/home">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </body>
  );
}
