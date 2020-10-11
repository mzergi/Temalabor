import React from 'react';
import Product from '../Components/Product';

export default class ProductAPI{
   
    /*let products = [useProduct("ASUS", "VivoBook X512JA-BQ169T", 1264),useProduct("Intel", "i5", 1234),
                   useProduct("Apple", "iPhone X", 2554), useProduct("Samsung", "Galaxy A41", 3234)];
    let productList = products.map((productitem) => 
    <li key = {productitem.id}> {productitem} </li>);

    return productList;*/
    //useProduct, hookok nelkul, addItem, getItems, delete stb... fv
    constructor(props){
        this.state = {
        products: [<Product productname =  "VivoBook X512JA-BQ169T" manufacturer = "ASUS" id = "1234"/>,
                        <Product productname =  "i5" manufacturer = "Intel" id = "5678"/>,
                        <Product productname =  "iPhone X" manufacturer = "Apple" id = "124"/>,
                        <Product productname =  "Galaxy A41" manufacturer = "Samsung" id = "12"/>],
        productnumber: 4,

        addProduct: (product) => {
            this.state.productnumber++;
            this.state.products[this.state.productnumber]=product;
        },

        fetch: () => {
            return this.state.products;
        }

        }
    }
}
