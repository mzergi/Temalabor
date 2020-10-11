import React from 'react';

export default class Product extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            productname: props.productname,
            manufacturer: props.manufacturer,
            id: props.id,
            getName: () => {
                return (this.state.productname + this.state.manufacturer)
            }
        };

    }

    render(){
        return (
            <h1>{this.state.productname} {this.state.manufacturer}, id: {this.state.id}</h1>
        )
    }

}