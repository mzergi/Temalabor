import React from 'react';
import useHeadLine from '../Hooks/HeadLine.js';
import ProductAPI from '../Mock/ProductAPI';
//TODO: atirni routerre hookok helyett
export default function ProductPage(){
  let mock = new ProductAPI();
  let products = mock.state.products;
  let productList = products.map((productitem) => 
    <li key = {productitem.id}> {productitem} </li>);
  
    return (
        <h>
          <div>
          </div>
          <div>
            <ul>{productList}</ul>
          </div>
        </h>
      );
}