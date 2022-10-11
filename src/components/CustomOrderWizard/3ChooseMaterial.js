import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";


  const ChooseMaterial = props => {
    if (props.step !== 3) {
      return null;
    }
  
    return (
      <div dir="rtl">
        <h1 >חומרים</h1>
      <Form.Group className="mb-3" controlId="formProjectName" onChange={(e)=> props.SetCloseFurnitureMaterial(e.target.value)}>
        <Form.Label dir="rtl">חומר לארגזים סגורים</Form.Label>
        <Form.Control />
      </Form.Group>
      <div class="form-group" onChange={(e)=> props.SetOpenFurnitureMaterial(e.target.value)}>
        <label for="exampleFormControlSelect1">חומר לארגזים פתוחים</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option></option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group" onChange={(e)=> props.SetDrawerMaterial(e.target.value)}>
        <label for="exampleFormControlSelect1">חומר למגירות</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option></option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group" onChange={(e)=> props.SetInnerDrawerMaterial(e.target.value)}>
        <label for="exampleFormControlSelect1">חומר למגירות פנימיות</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option></option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    
      <Form.Group className="mb-3" controlId="formCustomerAdress" onChange={(e)=> props.SetBaseMaterial(e.target.value)}>
        <Form.Label>חומר לסוקל</Form.Label>
        <Form.Control  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCustomerAdress" onChange={(e)=> props.SetFridgeFinishing(e.target.value)}>
        <Form.Label>גימור תא מקרר</Form.Label>
        <Form.Control />
      </Form.Group>
      
    </div>
    );
  };
  
  export default ChooseMaterial;
  