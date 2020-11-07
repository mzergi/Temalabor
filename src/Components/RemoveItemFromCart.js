import React, { useState } from "react";

export default function RemoveItemFromCart(props) {
  const handleClick = () => {
    let cart = props.cart;
    cart.remove(props.product);
    props.setCart(cart);
    props.setValid(false);
  };
  return <button onClick={() => handleClick()}> Remove Item from Cart </button>;
}
