import React, { useState, useEffect, useRef } from "react";
import RemoveItemFromCart from "./RemoveItemFromCart";

export default function CartComponent(props) {
  //mennyiseg +- gomb
  //removeFromCart bug, setCart hook talan jo lesz FIX: product.props.id!! Listnek kell key
  const [valid, setValid] = useState();
  const [cart, setCart] = useState(props.cart);

  let content = useRef(
    <div>
      <h5>Cart Contents:</h5>
      <ul style={{ justifyContent: "flex-start", flexDirection: "row" }}>
        {cart.state.products.map((productitem) => (
          <div>
            <h5>
              <li key={productitem.id}> {productitem}</li>
              <RemoveItemFromCart
                product={productitem}
                cart={cart}
                setValid={setValid}
                setCart={setCart}
              />
            </h5>
          </div>
        ))}
      </ul>
    </div>
  );
  useEffect(() => {
    let products = cart.state.products;
    content.current = (
      <div>
        <h6>Cart Contents:</h6>
        <ul style={{ justifyContent: "flex-start", flexDirection: "row" }}>
          {products.map((productitem) => (
            <h6>
              <h5></h5>
              <div
                style={{
                  listStyleType: "none",
                }}
              >
                <li key={productitem.props.id}> <p>{productitem.props.manufacturer} {productitem.props.productname}</p></li>
                <RemoveItemFromCart
                  product={productitem}
                  cart={cart}
                  setValid={setValid}
                  setCart={setCart}
                />
              </div>
            </h6>
          ))}
        </ul>
      </div>
    );
    setValid(true);
  });

  return content.current;
}
