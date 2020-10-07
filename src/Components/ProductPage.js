import React from 'react';
import useHeadLine from '../Hooks/HeadLine.js';
import useProductAPI from './ProductAPI';
import {PAGES} from '../Hooks/PageHandler';
//TODO: atirni routerre hookok helyett
export default function ProductPage(props){
  const handleClick = () => {
    props.setPage(PAGES.MAIN);
  }
    return (
        <h>
          <div>
            {useHeadLine("Z's Webshop")}
          </div>
          <div>
            <ul>{useProductAPI()}</ul>
          </div>
          <div>
            <button onClick={handleClick}>Go to main page</button>
          </div>
        </h>
      );
}