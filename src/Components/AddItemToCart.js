import React, { useState } from "react";

export default function AddItemToCart(props) {
  const [isValid, setValid] = useState(true);
  const handleClick = () => {
    props.cart.add(props.product);
    setValid(false);
    props.setValid(false);
  };
  return <button onClick={() => handleClick()}> Add Item To Cart </button>;
}
