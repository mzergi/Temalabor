import React from 'react';
import useHeadLine from '../Hooks/HeadLine.js'
import ProductPage from './ProductPage'

export default function MainPage(props){
  let productpage = ProductPage();
  const handleClick = () => {
    props.setPage(productpage);
  }
    return (
        <h>
          <div>
            {useHeadLine("Z's Webshop")}
          </div>
          <div>
            <h1>This is the main page</h1>
            <button onClick={handleClick}>Go to products</button>
          </div>
        </h>
      );
}