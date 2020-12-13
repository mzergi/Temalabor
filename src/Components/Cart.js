import React from "react";
import Product from "./Product";
import axios from "axios";

const url = "https://localhost:5001/api/carts";
export default class Cart {
  state = {
    products: [],
    cartpieces: [],
    numberofitems: 0,
    firstload: false,
  };
  async add(product) {
    this.addToNumberOfItems(1);
    var productarray = [...this.state.products];
    var piecesarray = [...this.state.cartpieces];
    var index = -1;
    for (var i = 0; i < productarray.length; i++){
      if (productarray[i].id === product.id){
        index = i;
      }
    }
    if (index !== -1) {
      piecesarray[index].pieces += 1;
      const res = await axios.post(url, {id: 1, productid: product.id, pieces: 1});
    }
    else {
      productarray.push(product);
      piecesarray.push({product: product, pieces: 1});
      const res = await axios.post(url, {id: 1, productid: product.id, pieces: 1});
    }
    this.state.products = productarray;
    this.state.cartpieces = piecesarray;
  }
  addToNumberOfItems(amount){
    this.state.numberofitems+=amount;
  }
  async remove(product) {
    var array = [...this.state.products];
    var piecesarray = [...this.state.cartpieces];
    var index = array.indexOf(product);
    console.log(index);
    if (index !== -1) {
      let removethismany = piecesarray[index].pieces
      this.addToNumberOfItems(-removethismany);
      array.splice(index, 1);
      piecesarray.splice(index, 1);
      this.state.products = array;
      this.state.cartpieces = piecesarray;

      const res = await axios.post(url, {id: 1, productid: product.id, pieces: -removethismany });
    }
  }
  async removeOnePiece(product){
    var productarray = [...this.state.products];
    var piecesarray = [...this.state.cartpieces];
    var index = -1;
    for (var i = 0; i < productarray.length; i++){
      if (productarray[i].id === product.id){
        index = i;
      }
    }
    if (index !== -1) {
      if(piecesarray[index].pieces === 1){
        this.remove(product);
      }
      else {
        this.addToNumberOfItems(-1);
        piecesarray[index].pieces -= 1;
        this.state.products = productarray;
        this.state.cartpieces = piecesarray;
        
        const res = await axios.post(url, {id: 1, productid: product.id, pieces: -1});
      }
    }
    else {

    }
  }
}
