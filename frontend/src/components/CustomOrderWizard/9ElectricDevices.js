import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

const ElectricDevices = (props) => {
  if (props.step !== 9) {
    return null;
  }

  return (
    <div>
      <h1>מכשירי חשמל</h1>
      <Form.Group
        className="mb-3"
        controlId="formProjectName"
        dir="rtl"
        onChange={(e) => props.SetOven(e.target.value)}
      >
        <Form.Label dir="rtl">תנור </Form.Label>
        <Form.Control placeholder="שם הפרוייקט" required="true" />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formCustomerName"
        onChange={(e) => props.SetStoveTop(e.target.value)}
      >
        <Form.Label>כיריים</Form.Label>
        <Form.Control placeholder="שם הלקוח" required="true" />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formCustomerAdress"
        onChange={(e) => props.SetDishwasher(e.target.value)}
      >
        <Form.Label>מדיח</Form.Label>
        <Form.Control placeholder="כתובת הלקוח" required="true" />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formCustomerAdress"
        onChange={(e) => props.SetMicrowave(e.target.value)}
      >
        <Form.Label>מיקרוגל</Form.Label>
        <Form.Control placeholder="כתובת הלקוח" required="true" />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="SetMicrowave"
        onChange={(e) => props.SetStoveVentilator(e.target.value)}
      >
        <Form.Label>קולט אדים </Form.Label>
        <Form.Control placeholder="" required="true" />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="SetStoveVentilator"
        onChange={(e) => props.SetFridge(e.target.value)}
      >
        <Form.Label>מקרר</Form.Label>
        <Form.Control placeholder="" required="true" />
      </Form.Group>
    </div>
  );
};

export default ElectricDevices;
