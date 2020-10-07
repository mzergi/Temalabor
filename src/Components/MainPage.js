import React from 'react';
import useHeadLine from '../Hooks/HeadLine.js';
import ProductPage from './ProductPage';
import {PAGES} from '../Hooks/PageHandler';
//TODO: atirni routerre hook helyett
export default function MainPage(props){
  const handleClick = () => {
    props.setPage(PAGES.PRODUCT);
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