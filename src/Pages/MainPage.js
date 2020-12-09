import React from "react";
import useHeadLine from "../Hooks/HeadLine.js";

export default function MainPage(props) {
  props.setItems(props.cart.state.numberofitems);
  return (
    <h>
      <div></div>
    </h>
  );
}
