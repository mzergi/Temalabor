import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button"

export default function AddItemToCart(props) {
  const handleClick = () => {
    props.cart.add(props.product);
    props.setValid(false);
    props.setItems(props.cart.state.numberofitems);
  };
  return <Button variant="primary" className = "ml-4" onClick={() => handleClick()}> {props.text} </Button>;
}
