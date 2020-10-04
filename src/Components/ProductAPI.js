import React from 'react';
import useProduct from '../Hooks/Product.js'

export default function useProductAPI(){
    let products = [useProduct("ASUS", "VivoBook X512JA-BQ169T", 1264),useProduct("Intel", "i5", 1234),
                   useProduct("Apple", "iPhone X", 2554), useProduct("Samsung", "Galaxy A41", 3234)];
    let productList = products.map((productitem) => 
    <li key = {productitem.id}> {productitem} </li>);

    return productList;
}
