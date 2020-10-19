import React, {useState, useEffect, View, Text} from "react";
import useHeadLine from "../Hooks/HeadLine.js";
import ProductAPI from "../Mock/ProductAPI";
import AddItemToCart from "../Components/AddItemToCart";
import Cart from "../Components/Cart.js";
import ProductHook from "../Hooks/ProductHook";
import CartComponent from "../Components/CartComponent";

export default function ProductPage(props) {
  //kereses textboxxal
  let mock = new ProductAPI();
  let products = mock.fetch();
  const [valid, setValid] = useState(false);
  useEffect(() => {
    setValid(true);
  });
  return (
    <div>
      <ul>
        {products.map((productitem) => (
          <div>
            <h4>
              <li key={productitem.id}> {productitem} </li>
              <AddItemToCart product={productitem} cart={props.cart} setValid= {setValid}/>
            </h4>
          </div>
        ))}
      </ul>
        <CartComponent cart = {props.cart}/>
    </div>
  );
}
