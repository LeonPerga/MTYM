import React, { Component } from "react";
import { Form, Button,Row,Col } from "react-bootstrap";

const ChooseSides = (props) => {
  if (props.step !== 5) {
    return null;
  }

  return (
    <div dir="rtl">
      <h1>דפנות</h1>
      <hr/>
      <Row>
        <Col>
          <div
            class="form-group"
            onChange={(e) => props.SetSideType(e.target.value)}
          >
            <select class="form-control" id="exampleFormControlSelect1">
              <option hidden >סוג דפנות</option>
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
            onChange={(e) => props.SetSideModel(e.target.value)}
          >
            <select class="form-control" id="exampleFormControlSelect1">
              <option hidden>דגם דפנות</option>
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
            onChange={(e) => props.SetSideMaterial(e.target.value)}
          >
            <select class="form-control" id="exampleFormControlSelect1">
              <option hidden>סוג חומר דפנות</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </Col>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="formCustomerAdress"
            onChange={(e) => props.SetSideFinish(e.target.value)}
          >
            <Form.Control placeholder="גימור/גוון" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default ChooseSides;
