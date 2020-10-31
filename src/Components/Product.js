import React from "react";

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productname: props.productname,
      manufacturer: props.manufacturer,
      id: props.id,
    };
  }
  getName() {
    return this.state.productname + this.state.manufacturer;
  }
  render() {
    return (
      <div>
        {this.state.manufacturer} {this.state.productname}, id: {this.state.id}
      </div>
    );
  }
}
