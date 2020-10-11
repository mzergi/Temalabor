import React from 'react';
import useHeadLine from '../Hooks/HeadLine.js';
import ProductAPI from '../Mock/ProductAPI';
import AddItemToCart from '../Components/AddItemToCart';
import Cart from '../Components/Cart.js';
//TODO: atirni routerre hookok helyett
export default function ProductPage(){
  let mock = new ProductAPI();
  let products = mock.fetch();
  let productList = products.map((productitem) => 
    <li key = {productitem.id}> {productitem} {AddItemToCart({product: productitem, cart: new Cart()})} </li>);
  
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