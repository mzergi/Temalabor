import React from 'react';
import useHeadLine from '../Hooks/HeadLine.js';
import useProductAPI from './ProductAPI';
//TODO: atirni routerre hookok helyett
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