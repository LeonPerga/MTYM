import React, { Component } from "react";
import { Form, Button, Row ,Col} from "react-bootstrap";

const AssemblyMethod = (props) => {
  if (props.step !== 2) {
    return null;
  }
  return (
    <div dir="rtl">
      <h1>שיטות הרכבה</h1>
      <hr/>
      <Row>
        <Col>
      <Form.Group
        className="mb-3"
        controlId="formProjectName"
        onChange={(e) => props.SetRoomName(e.target.value)}
      >
        <Form.Control placeholder=" שם החדר" />
      </Form.Group>
      </Col>
      </Row>
      <Row>
      <Col>
      הוספת קבצים
      <div class="file-upload-wrapper">
        <input type="file" id="input-file-now" class="file-upload" />
      </div>

      </Col>
      </Row>
      <Row>
        <Col>
      <div
        class="form-group"
        onChange={(e) => props.SetAssemblyMethod(e.target.value)}
      >
        <select class="form-control" id="exampleFormControlSelect1" style={{marginTop:"2%"}}>
          <option hidden>שיטת הרכבת ארגזים</option>
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
        onChange={(e) => props.SetDrawerType(e.target.value)}
      >
        <select class="form-control" id="exampleFormControlSelect1">
          <option hidden>סוג מגירות</option>
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
          onChange={(e) => props.SetAssemblyMethodWoodDrawer(e.target.value)}
        >
          <select class="form-control" id="exampleFormControlSelect1">
            <option hidden>שיטת הרכבה מגירת עץ </option>
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
          onChange={(e) => props.SetSideHeight(e.target.value)}
        >
          <select class="form-control" id="exampleFormControlSelect1">
            <option hidden>גובה דופן</option>
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
          onChange={(e) => props.SetSideAlign(e.target.value)}
        >
          <select class="form-control" id="exampleFormControlSelect1">
            <option hidden>יישור דופן</option>
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
            onChange={(e) => props.SetBaseType(e.target.value)}
          >
            <Form.Control  placeholder="סוג סוקל"/>
          </Form.Group>
        </Col>
        <Col class="d-flex justify-content-start">
          <Form.Group
            className="mb-3"
            controlId="formCustomerAdress"
            onChange={(e) => props.SetBaseHeight(e.target.value)}
          >
            <Form.Control placeholder="גובה סוקל"/>
          </Form.Group>
        </Col>
        </Row>
    </div>
  );
};

export default AssemblyMethod;
