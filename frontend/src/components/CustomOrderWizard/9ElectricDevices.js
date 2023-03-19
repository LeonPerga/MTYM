import React, { Component } from "react";
import { Form, Button ,Row, Col} from "react-bootstrap";

const ElectricDevices = (props) => {
  if (props.step !== 9) {
    return null;
  }

  return (
    <div>
      <h1>מכשירי חשמל</h1>
      <hr />
      <Row>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="formProjectName"
            dir="rtl"
            onChange={(e) => props.SetOven(e.target.value)}
          >
            <Form.Control placeholder="תנור" required="true" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="formCustomerName"
            onChange={(e) => props.SetStoveTop(e.target.value)}
          >
            <Form.Control placeholder="כיריים" required="true" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="formCustomerAdress"
            onChange={(e) => props.SetDishwasher(e.target.value)}
          >
            <Form.Control placeholder="מדיח" required="true" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="formCustomerAdress"
            onChange={(e) => props.SetMicrowave(e.target.value)}
          >
            <Form.Control placeholder="מיקרוגל" required="true" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="SetMicrowave"
            onChange={(e) => props.SetStoveVentilator(e.target.value)}
          >
            <Form.Control placeholder="קולט אדים " required="true" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="SetStoveVentilator"
            onChange={(e) => props.SetFridge(e.target.value)}
          >
            <Form.Control placeholder="מקרר" required="true" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default ElectricDevices;
