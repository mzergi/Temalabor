import React from "react";
import CartComponent from "../Components/CartComponent";

export default function CartPage(props) {
  props.setItems(props.cart.state.numberofitems);
  return (
    <div>
      <h4></h4>
      <h4>
        <CartComponent cart={props.cart} setItems = {props.setItems}/>
      </h4>
    </div>
  );
}
