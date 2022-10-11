import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

const AssemblyMethod = (props) => {
  if (props.step !== 2) {
    return null;
  }
  return (
    <div dir="rtl">
      <h1>שיטות הרכבה</h1>
      <Form.Group
        className="mb-3"
        controlId="formProjectName"
        onChange={(e) => props.SetRoomName(e.target.value)}
      >
        <Form.Label dir="rtl">שם החדר</Form.Label>
        <Form.Control />
      </Form.Group>
      הוספת קבצים
      <div class="file-upload-wrapper">
        <input type="file" id="input-file-now" class="file-upload" />
      </div>
      <div
        class="form-group"
        onChange={(e) => props.SetAssemblyMethod(e.target.value)}
      >
        <label for="exampleFormControlSelect1">שיטת הרכבת ארגזים</label>
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
        onChange={(e) => props.SetDrawerType(e.target.value)}
      >
        <label for="exampleFormControlSelect1">סוג מגירות</label>
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
        onChange={(e) => props.SetAssemblyMethodWoodDrawer(e.target.value)}
      >
        <label for="exampleFormControlSelect1">שיטת הרכבה מגירת עץ </label>
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
        onChange={(e) => props.SetSideHeight(e.target.value)}
      >
        <label for="exampleFormControlSelect1">גובה דופן</label>
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
        onChange={(e) => props.SetSideAlign(e.target.value)}
      >
        <label for="exampleFormControlSelect1">יישור דופן</label>
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
        onChange={(e) => props.SetBaseType(e.target.value)}
      >
        <Form.Label>סוג סוקל</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formCustomerAdress"
        onChange={(e) => props.SetBaseHeight(e.target.value)}
      >
        <Form.Label>גובה סוקל</Form.Label>
        <Form.Control />
      </Form.Group>
    </div>
  );
};

export default AssemblyMethod;
