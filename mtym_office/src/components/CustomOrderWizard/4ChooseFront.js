import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

const ChooseFront = (props) => {
  if (props.step !== 4) {
    return null;
  }
  return (
    <div dir="rtl">
      <h1>חזיתות</h1>
      <div
        class="form-group"
        onChange={(e) => props.SetFrontType(e.target.value)}
      >
        <label for="exampleFormControlSelect1">סוג חזיתות</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option></option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div
        class="form-group"
        onChange={(e) => props.SetFrontModel(e.target.value)}
      >
        <label for="exampleFormControlSelect1">דגם חזיתות</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option></option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <div
        class="form-group"
        onChange={(e) => props.SetFrontMaterial(e.target.value)}
      >
        <label for="exampleFormControlSelect1">סוג חומר חזיתות</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option></option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <Form.Group
        className="mb-3"
        controlId="formCustomerAdress"
        onChange={(e) => props.SetFrontFinish(e.target.value)}
      >
        <Form.Label>גימור/גוון</Form.Label>
        <Form.Control />
      </Form.Group>
    </div>
  );
};

export default ChooseFront;
