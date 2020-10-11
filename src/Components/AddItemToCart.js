import React from 'react';

export default function AddItemToCart(props){
    const handleClick = () =>{
        props.cart.add(props.product)
    }
    return(
        <h2 onClick={() =>  handleClick()}> Add Item to Cart </h2>
    )
}