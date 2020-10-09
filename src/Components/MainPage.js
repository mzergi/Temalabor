import React from 'react';
import useHeadLine from '../Hooks/HeadLine.js';
import ProductPage from './ProductPage';
import {PAGES} from '../Hooks/PageHandler';
//TODO: atirni routerre hook helyett
export default function MainPage(){
    return (
        <h>
          <div>
            {useHeadLine("Z's Webshop")}
          </div>
        </h>
      );
}