import React, { useState, useEffect, useRef } from "react";
import RemoveItemFromCart from "./RemoveItemFromCart";
import RemovePieceFromCart from "./RemovePieceFromCart";
import AddItemToCart from "./AddItemToCart";
import Container from "react-bootstrap/Container";
import Product from "./Product";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"

export default function CartComponent(props) {
  //mennyiseg +- gomb
  //removeFromCart bug, setCart hook talan jo lesz FIX: product.props.id!! Listnek kell key
  const [valid, setValid] = useState();
  let cart = props.cart;

  let content = useRef(
    <div>
      <h5>Cart Contents:</h5>
    </div>
  );
  useEffect(() => {
    let products = cart.state.products;
    let cartpieces = cart.state.cartpieces;
    content.current = (
      <Container fluid className="mb-12">
        <h6>Cart Contents:</h6>
        <Row>
          {products.map((productitem) => (
            <Card className = "cart-card">
              <h5></h5>
              <Card.Img variant="top" 
                src={require("../Resources/res/ProductImages/product_"
                  .concat(productitem.id)
                  .concat(".png"))}
                alt="productimg"
                width="100"
                height="auto"
              ></Card.Img>
              <Card.Body>
                {productitem.manufacturer} {productitem.productName}{" "}
                <br></br>Pieces:{" "}
                {
                  cart.state.cartpieces[
                    cart.state.products.indexOf(productitem)
                  ].pieces
                }
                </Card.Body>
                <Card.Text>
                <AddItemToCart
                  product={productitem}
                  cart={cart}
                  setValid={setValid}
                  text="+"
                  setItems={props.setItems}
                />
                <RemovePieceFromCart
                  product={productitem}
                  cart={cart}
                  setValid={setValid}
                  text="-"
                  setItems={props.setItems}
                />
              </Card.Text>
              <Card.Footer>
              <RemoveItemFromCart
                product={productitem}
                cart={cart}
                setValid={setValid}
                text="Remove Item from Cart"
                setItems={props.setItems}
              />
              </Card.Footer>
            </Card>
          ))}
        </Row>
      </Container>
    );
    setValid(true);
  }, [valid]);

  return content.current;
}
