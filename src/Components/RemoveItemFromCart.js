import React, { useState } from "react";

export default function RemoveItemFromCart(props) {
  const [isValid, setValid] = useState(true);
  const handleClick = () => {
    props.cart.remove(props.product);
    setValid(false);
    props.setValid(false);
  };
  return <button onClick={() => handleClick()}> Remove Item from Cart </button>;
}
