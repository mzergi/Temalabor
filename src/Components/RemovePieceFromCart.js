import React, { useState } from "react";
import Button from "react-bootstrap/Button"

export default function RemoveItemFromCart(props) {
  const handleClick = () => {
    let cart = props.cart;
    cart.removeOnePiece(props.product);
    props.setValid(false);
    props.setItems(props.cart.state.numberofitems);
  };
  return <Button variant= "danger" className = "ml-4" onClick={() => handleClick()}> {props.text} </Button>;
}