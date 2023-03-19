import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const NewProject = (props) => {
  if (props.step !== 0) {
    return null;
  }
  return (
 <div dir="rtl">
      <h2 ><font face="Assistant" > פרוייקט חדש</font> </h2>
      <hr/>
          <Form.Group className="mb-3" controlId="formProjectName" dir="rtl"  onChange={(e)=> props.setProjectName(e.target.value)} >
            <Form.Label style = {{right:"-10%"}}>שם הפרוייקט</Form.Label>
            <Form.Control placeholder="שם הפרוייקט" required = "true"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCustomerName" onChange={(e)=> props.SetCustomerName(e.target.value)}>
            <Form.Label>שם הלקוח</Form.Label>
            <Form.Control placeholder="שם הלקוח" required = "true"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCustomerAdress" onChange={(e)=> props.SetAdress(e.target.value)}>
            <Form.Label>כתובת</Form.Label>
            <Form.Control placeholder="כתובת הלקוח" required = "true"  />
          </Form.Group>
          
  </div>
  );
};

export default NewProject;
