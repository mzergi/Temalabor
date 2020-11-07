import React from "react";
import Product from "./Product";
export default class Cart {
  state = {
    products: [],
  };
  add(product) {
    this.state.products.push(product);
  }
  remove(product) {
    var array = [...this.state.products];
    var index = array.indexOf(product);
    console.log(index);
    if (index !== -1) {
      array.splice(index, 1);
      this.state.products = array;
    }
  }
}
