import React, { useState } from "react";
import Button from "react-bootstrap/Button"

export default function RemoveItemFromCart(props) {
  const handleClick = () => {
    let cart = props.cart;
    cart.remove(props.product);
    props.setCart(cart);
    props.setValid(false);
  };
  return <Button variant= "danger" onClick={() => handleClick()}> Remove Item from Cart </Button>;
}
