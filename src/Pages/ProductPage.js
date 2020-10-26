import React, { useState, useEffect, useRef, View, Text } from "react";
import ProductAPI from "../Mock/ProductAPI";
import AddItemToCart from "../Components/AddItemToCart";
import CartComponent from "../Components/CartComponent";
import Product from "../Components/Product";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductPage(props) {
  //kereses textboxxal
  const url = "https://localhost:5001/api/productitems";

  //let mock = new ProductAPI();
  let content = useRef(
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );

  const [valid, setValid] = useState(false);
  useEffect(() => {
    setValid(true);
  });

  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
    });

    if (products!=null) {
      content.current = (
        <div>
          <ul>
            {products &&
              products.map((productitem) => (
                <div>
                  <h4>
                    <li key={productitem.id}>
                      <Product
                        productname={productitem.productName}
                        manufacturer={productitem.manufacturer}
                        id={productitem.id}
                      />
                    </li>
                    <AddItemToCart
                      product={
                        <Product
                          productname={productitem.productName}
                          manufacturer={productitem.manufacturer}
                          id={productitem.id}
                        />
                      }
                      cart={props.cart}
                      setValid={setValid}
                    />
                  </h4>
                </div>
              ))}
          </ul>
          <CartComponent cart={props.cart} />
        </div>
      );
    }
  }, []);

  return content.current;
}
