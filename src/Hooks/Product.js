import React, {useState} from 'react';

export default function useProduct(_manufacturer, _productname, _id){
    const[product, setProduct] = useState({
        manufacturer: _manufacturer,
        productname: _productname,
        id: _id
    })
    return <h1>{product.manufacturer} {product.productname} {product.id} </h1>;
}