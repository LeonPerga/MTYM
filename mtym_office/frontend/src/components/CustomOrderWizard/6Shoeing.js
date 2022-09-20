import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";



  const Shoeing = props => {
    if (props.step !== 6) {
      return null;
    }
  
    return (
      <div dir="rtl">
        <h1 >פרזול</h1>
        <Form.Group className="mb-3" controlId="rail" onChange={(e) => props.SetRail(e.target.value)}>
          <Form.Label dir="rtl">יצרן מסילות</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="OuterDrawer" onChange={(e) => props.SetOuterDrawerType(e.target.value)}>
          <Form.Label>סוג מגירה חיצונית </Form.Label>
          <Form.Control  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="InnerDrawer" onChange={(e) => props.SetInnerDrawerType(e.target.value)}>
          <Form.Label>סוג מגירה פנימית </Form.Label>
          <Form.Control  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="SetTone" onChange={(e) => props.SetTone(e.target.value)}>
        <Form.Label>גוון</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3" controlId="SetSpacing" onChange={(e) => props.SetSpacing(e.target.value)}>
        <Form.Label>הרחקות</Form.Label>
          <Form.Control />
        </Form.Group>
    </div>
    );
  };
  
  export default Shoeing;