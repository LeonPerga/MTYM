import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

const ChooseSides = (props) => {
  if (props.step !== 5) {
    return null;
  }

  return (
    <div dir="rtl">
      <h1>דפנות</h1>
      <div
        class="form-group"
        onChange={(e) => props.SetSideType(e.target.value)}
      >
        <label for="exampleFormControlSelect1">סוג דפנות</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option></option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div
        class="form-group"
        onChange={(e) => props.SetSideModel(e.target.value)}
      >
        <label for="exampleFormControlSelect1">דגם דפנות</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option></option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div
        class="form-group"
        onChange={(e) => props.SetSideMaterial(e.target.value)}
      >
        <label for="exampleFormControlSelect1">סוג חומר דפנות</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option></option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <Form.Group
        className="mb-3"
        controlId="formCustomerAdress"
        onChange={(e) => props.SetSideFinish(e.target.value)}
      >
        <Form.Label>גימור/גוון</Form.Label>
        <Form.Control />
      </Form.Group>
    </div>
  );
};

export default ChooseSides;
