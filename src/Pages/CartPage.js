import React from "react";
import CartComponent from "../Components/CartComponent";

export default function CartPage(props) {
  return (
    <div>
      <h4></h4>
      <h4>
        <CartComponent cart={props.cart} />
      </h4>
    </div>
  );
}
