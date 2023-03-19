import React, { Component } from "react";
import { Form, Button,Row, Col } from "react-bootstrap";


  const ChooseMaterial = props => {
    if (props.step !== 3) {
      return null;
    }
  
    return (
      <div dir="rtl">
        <h1>חומרים</h1>
        <hr />
        <Row>
          <Col>
            <div class="form"
              className="mb-3"
              onChange={(e) => props.SetCloseFurnitureMaterial(e.target.value)}
            >
              <Form.Control placeholder="חומר לארגזים סגורים"/>
            </div>
          </Col>
          <Col>
            <div
              class="form"
              onChange={(e) => props.SetOpenFurnitureMaterial(e.target.value)}
            >
              <select class="form-control" id="exampleFormControlSelect1">
                <option hidden>חומר לארגזים פתוחים</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              class="form-group"
              onChange={(e) => props.SetDrawerMaterial(e.target.value)}
            >
              <select class="form-control" id="exampleFormControlSelect1">
                <option hidden >חומר למגירות</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </Col>
          <Col>
            <div
              class="form-group"
              onChange={(e) => props.SetInnerDrawerMaterial(e.target.value)}
            >
              <select class="form-control" id="exampleFormControlSelect1">
                <option hidden> חומר למגירות פנימיות</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="formCustomerAdress"
              onChange={(e) => props.SetBaseMaterial(e.target.value)}
            >
              <Form.Control placeholder="חומר לסוקל" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="formCustomerAdress"
              onChange={(e) => props.SetFridgeFinishing(e.target.value)}
            >
              <Form.Control placeholder = "גימור תא מקרר"/>
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default ChooseMaterial;
  