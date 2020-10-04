import React from 'react';
import useHeadLine from '../Hooks/HeadLine.js'
import ProductAPI from './ProductAPI'

export default function ProductPage(){
    return (
        <h>
          <div>
            {useHeadLine("Z's Webshop")}
          </div>
          <div>
            <ul>{ProductAPI()}</ul>
          </div>
        </h>
      );
}