import React, { useState } from "react";

export default function useProduct(props) {
  const [product, setProduct] = useState();
  setProduct(props.product);

  return (
    <h1>
      {product.manufacturer} {product.productname} {product.id}{" "}
    </h1>
  );
}
