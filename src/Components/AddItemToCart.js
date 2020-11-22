import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button"

export default function AddItemToCart(props) {
  const handleClick = () => {
    props.cart.add(props.product);
    props.setValid(false);
  };
  return <Button variant="primary" onClick={() => handleClick()}> Add Item To Cart </Button>;
}
