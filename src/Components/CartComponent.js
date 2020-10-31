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
      <h5>Cart Contents:</h5>
      <ul style={{ justifyContent: "flex-start", flexDirection: "row" }}>
        {props.cart.state.products.map((productitem) => (
          <div>
            <h5>
              <li key={productitem.id}> {productitem}</li>
              <RemoveItemFromCart product={productitem} cart={props.cart} setValid = {setValid} />
            </h5>
          </div>
        ))}
      </ul>
    </div>
  );
}
