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
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductPage(props) {
  //TODO: kereses textboxxal
  const url = "https://localhost:5001/api/productitems";

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
  });

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
      <Container fluid>
        <h5></h5>
        <h5>Products:</h5>
        <Row
          className="justify-conent-md-center"
          sm="5"
          style={{
            listStyleType: "none",
          }}
        >
          {products.map((productitem) => (
            <h5>
              <Col md={{span: 10, offset: 3}}>
                <Product
                  productname={productitem.productName}
                  manufacturer={productitem.manufacturer}
                  id={productitem.id}
                />

                <AddItemToCart
                  product={
                    <Product
                      productname={productitem.productName}
                      manufacturer={productitem.manufacturer}
                      id={productitem.id}
                    />
                  }
                  cart={props.cart}
                  setValid={setValid}
                />
              </Col>
            </h5>
          ))}
        </Row>
        <CartComponent cart={props.cart} />
      </Container>
    );
  }

  return content.current;
}
