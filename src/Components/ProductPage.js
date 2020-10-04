import React from 'react';
import '../Hooks/App.css';
import useProduct from '../Hooks/Product.js'
import useHeadLine from '../Hooks/HeadLine.js'
import useProductAPI from '../Hooks/ProductAPI'

export default function ProductPage(){
    return (
        <h>
          <div>
            {useHeadLine("Z's Webshop")}
          </div>
          <div>
            <ul>{useProductAPI()}</ul>
          </div>
        </h>
      );
}