import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Components/Product";
import AddItemToCart from "../Components/AddItemToCart";
import CartComponent from "../Components/CartComponent";

//TODO: fetch through each individual product
export default function ProductFetch(props) {
  const url = "https://localhost:5001/api/productitems/1";
  const [products, setProducts] = useState([]);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      var tmp = [];
      var i;
      for (i = 0; i < response.data.length; i++) {
        tmp.push(
          <Product
            productname={response.data[i].productName}
            manufacturer={response.data[i].manufacturer}
            id={response.data[i].id}
          />
        );
      }
      setProducts(tmp);
    });
  }, []);
  if (products) {
    var i;
    for(i = 0; i<products.length;i++){
        console.log("hi");
    }
    content = (
      <div>
        <ul>
          {products && products.map((productitem) => (
            <div>
              <h4>
                <li key={productitem.id}> {productitem} </li>
                <AddItemToCart
                  product={productitem}
                  cart={props.cart}
                  setValid={props.setValid}
                />
              </h4>
            </div>
          ))}
        </ul>
        <CartComponent cart={props.cart} />
      </div>
    );
    return content;
  }
}
