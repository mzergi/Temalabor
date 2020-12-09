import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import MainPage from "../Pages/MainPage";
import ProductPage from "../Pages/ProductPage";
import Cart from "../Components/Cart";
import CartComponent from "../Components/CartComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import useHeadLine from "./HeadLine";
import CartPage from "../Pages/CartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button, Badge, Spinner } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";

export default function App(props) {
  const PositionedLink = styled(Link)`
    position: relative;
    float: ${(props) => (props.left ? "left" : "right")};
    padding: 10px;
    display: inline-block;
  `;

  const url = "https://localhost:5001/api/carts/1";
  
  let content = useRef(
    <body>
      <div>
        <Spinner
          animation="border"
          role="status"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </body>
  );

  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setCart(result.data);
    };

    fetchData();
  }, []);

  const [numberofitems, setNumberOfItems] = useState(0);
  
  if (cart !== null) {
    if (props.cart.state.firstload === true) {
      props.cart.state.products = cart.products;
      props.cart.state.numberofitems = cart.numberofitems;
      props.cart.state.cartpieces = cart.cartpieces;
      props.cart.state.firstload = false;
    }
    content.current = (
      <body class="body-dark">
        <Router>
          <Navbar bg="dark" variant="dark">
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
              <Nav.Item className="ml-auto text-on-dark-navbar">
                <h5>Z's Webshop</h5>
              </Nav.Item>
              <Nav.Item className="ml-auto">
                <Link to={"/cart"}>
                  <Button variant="primary">
                    <FaShoppingCart />{" "}
                    <Badge variant="light">{numberofitems}</Badge>
                  </Button>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          <div>
            <Switch>
              <Route exact path="/products">
                <ProductPage cart={props.cart} setItems={setNumberOfItems} />
              </Route>
              <Route exact path="/cart">
                <CartPage cart={props.cart} setItems={setNumberOfItems} />
              </Route>
              <Route exact path="/home">
                <MainPage cart={props.cart} setItems={setNumberOfItems} />
              </Route>
            </Switch>
          </div>
        </Router>
      </body>
    );
  }
  return content.current;
}
