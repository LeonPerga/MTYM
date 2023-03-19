import React, { Component } from "react";
import { Form, Button,Row,Col } from "react-bootstrap";

const ChooseFront = (props) => {
  if (props.step !== 4) {
    return null;
  }
  return (
    <div dir="rtl">
      <h1>חזיתות</h1>
      <hr/>
      <Row>
        <Col>
          <div
            class="form-group"
            onChange={(e) => props.SetFrontType(e.target.value)}
          >
            <select class="form-control" id="exampleFormControlSelect1">
              <option hidden>סוג חזיתות</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </Col>
        <Col>
          <div
            class="form-group"
            onChange={(e) => props.SetFrontModel(e.target.value)}
          >
            <select class="form-control" id="exampleFormControlSelect1">
              <option hidden>דגם חזיתות</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            class="form-group"
            onChange={(e) => props.SetFrontMaterial(e.target.value)}
          >
            <select class="form-control" id="exampleFormControlSelect1">
              <option hidden>סוג חומר חזיתות</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="formCustomerAdress"
              onChange={(e) => props.SetFrontFinish(e.target.value)}
            >
              <Form.Control placeholder="גימור/גוון"/>
            </Form.Group>
          </Col>
      </Row>
    </div>
  );
};

export default ChooseFront;
