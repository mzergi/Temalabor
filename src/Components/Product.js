import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productname: props.productname,
      manufacturer: props.manufacturer,
      price: props.price,
      id: props.id,
    };
  }
  getName() {
    return this.state.productname + this.state.manufacturer;
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            {this.state.manufacturer} {this.state.productname}
          </Col>
        </Row>
        <Row>
          <Col>
            price: {this.state.price}
          </Col>
        </Row>
        <Row>
          <Col>
            id: {this.state.id}
          </Col>
        </Row>
      </div>
    );
  }
}
