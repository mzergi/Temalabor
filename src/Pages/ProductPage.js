import React, { useState, useEffect, useRef, View, Text } from "react";
import ProductAPI from "../Mock/ProductAPI";
import AddItemToCart from "../Components/AddItemToCart";
import CartComponent from "../Components/CartComponent";
import Product from "../Components/Product";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductPage(props) {
  //TODO: kereses textboxxal
  const url = "https://localhost:5001/api/productitems";

  props.setItems(props.cart.state.numberofitems);

  //let mock = new ProductAPI();
  let content = useRef(
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
  );

  const [valid, setValid] = useState(false);
  useEffect(() => {
    setValid(true);
  }, [valid]);

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setProducts(result.data);
    };

    fetchData();
  }, []);

  if (products != null) {
    content.current = (
      <Container fluid className="mb-12">
        <h5></h5>
        <h5>Products:</h5>
        <CardGroup>
          {products.map((productitem) => (
            <p>
              <Col>
              <Card className = "product-card card-dark">
                <Card.Img variant="top" src={require('../Resources/res/ProductImages/product_'.concat(productitem.id).concat(".png"))} alt = "productImage" width = "auto" height="200"></Card.Img>
                <Card.Body>
                  <b>{productitem.manufacturer} {productitem.productName}</b>
                <Card.Text>
                  Price: {productitem.price}
                </Card.Text>
                </Card.Body>
                <Card.Footer className = "card-dark">
                <AddItemToCart
                  product= {productitem}
                  cart={props.cart}
                  setValid={setValid}
                  text = {"Add Item to Cart"}
                  setItems={props.setItems}
                />
                </Card.Footer>
              </Card>
              </Col>
            </p>
          ))}
        </CardGroup>
      </Container>
    );
  }

  return content.current;
}

/*
        <CartComponent cart={props.cart} setValid={setValid} class = "p-4"/>
*/