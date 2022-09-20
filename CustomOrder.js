import { Container, Row, Col,Form, Button } from "react-bootstrap";
import { useState } from "react";
import React, { Component } from "react";
import '../../static/css/custom_order.css'

class Furniture {
  state = {
  typeOfRoom: '',
  nameOfRoom: '',
  methodOfAssembly: '',
  methodOfAssemblyWood: '',
  partitionHeight: '',
  partitionAllignment: '',
  pedestalType: '',
  pedestalHeight: '',
  materialForClose: '',
  materialForOpen: '',
  materialForDrawers: '',
  materialForInnerDrawers:'',
  materialForPadestal: '',
  fridgeCompFinishing: '',
  frontType: '',
  frontModule: '',
  frontMaterial: '',
  frontFinishing: '',
  sidesType:'',
  sidesModule:'',
  sidesFinishing: '',
  railBrand: '',
  drawerTypeOuter: '',
  drawerTypeInner: '',
  tone: '',
  spacing: '',
}
}


export default class CustomOrder extends Component {
    constructor(props) {
      super(props);
    }
    state = {
      step:1,
      projectName: '',
      CustomerName: '',
      adress: '',
      furniture: [],
    }

    
  nextStep = () => {
    const { step } = this.state
    this.setState({
        step : step + 1
    })
  }
  prevStep = () => {
    const { step } = this.state
    this.setState({
        step : step - 1
    })
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
    render() {
      const {projectName, CustomerName, adress, furniture} = this.state;
      const inputValues = {projectName, CustomerName, adress}
      switch(this.state.step) {
        case 1:
          return(
         
            <div class="container h-100 d-flex justify-content-center">
                <div  class="jumbotron my-auto">
                  <Form >
                          <Form.Group className="mb-3" controlId="formProjectName">
                            <Form.Label>שם הפרוייקט</Form.Label>
                            <Form.Control  placeholder="שם הפרוייקט" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formCustomerName">
                            <Form.Label>שם הלקוח</Form.Label>
                            <Form.Control  placeholder="שם הלקוח" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formCustomerAdress">
                            <Form.Label>כתובת</Form.Label>
                            <Form.Control placeholder="כתובת הלקוח" />
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            {this.nextStep}
                            הבא
                          </Button>
                    </Form>
                </div>
            </div>
          );
          
        default:
          this.state.step = 1;
          return(
         
            <div class="container h-100 d-flex justify-content-center">
                <div  class="jumbotron my-auto">
                  <Form >
                          <Form.Group className="mb-3" controlId="formProjectName">
                            <Form.Label>שם הפרוייקט</Form.Label>
                            <Form.Control  placeholder="שם הפרוייקט" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formCustomerName">
                            <Form.Label>שם הלקוח</Form.Label>
                            <Form.Control  placeholder="שם הלקוח" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formCustomerAdress">
                            <Form.Label>כתובת</Form.Label>
                            <Form.Control placeholder="כתובת הלקוח" />
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            {this.nextStep}
                            הבא
                          </Button>
                    </Form>
                </div>
            </div>
          );
      }
    }
  }