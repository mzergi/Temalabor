import React, {useState, useEffect} from "react";
import RemoveItemFromCart from "./RemoveItemFromCart";

export default function CartComponent(props) {
  //mennyiseg +- gomb
  const [valid, setValid] = useState();
  useEffect(() => {
      setValid(true);
  }, [valid]);
  return (
    <div>
      <h4>Cart Contents:</h4>
      <ul style={{ justifyContent: "flex-start", flexDirection: "row" }}>
        {props.cart.state.products.map((productitem) => (
          <div>
            <h4>
              <li key={productitem.id}> {productitem}</li>
              <RemoveItemFromCart product={productitem} cart={props.cart} setValid = {setValid} />
            </h4>
          </div>
        ))}
      </ul>
    </div>
  );
}
