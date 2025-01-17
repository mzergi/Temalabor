import React, { useState } from "react";
import Button from "react-bootstrap/Button"

export default function RemoveItemFromCart(props) {
  const handleClick = () => {
    let cart = props.cart;
    cart.remove(props.product);
    props.setValid(false);
    props.setItems(props.cart.state.numberofitems);
  };
  return <Button variant= "danger" onClick={() => handleClick()}> {props.text} </Button>;
}
