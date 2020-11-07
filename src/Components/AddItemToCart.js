import React, { useState } from "react";

export default function AddItemToCart(props) {
  const handleClick = () => {
    props.cart.add(props.product);
    props.setValid(false);
  };
  return <button onClick={() => handleClick()}> Add Item To Cart </button>;
}
