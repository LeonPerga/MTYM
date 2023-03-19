import React, { Component } from "react";
import { Form, Button,Row,Col } from "react-bootstrap";



  const Shoeing = props => {
    if (props.step !== 6) {
      return null;
    }
  
    return (
      <div dir="rtl">
        <h1>פרזול</h1>
        <hr />
        <Row>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="rail"
              onChange={(e) => props.SetRail(e.target.value)}
            >
              <Form.Control placeholder="יצרן מסילות" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="OuterDrawer"
              onChange={(e) => props.SetOuterDrawerType(e.target.value)}
            >
              <Form.Control placeholder="סוג מגירה חיצונית " />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="InnerDrawer"
              onChange={(e) => props.SetInnerDrawerType(e.target.value)}
            >
              <Form.Control placeholder="סוג מגירה פנימית " />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="SetTone"
              onChange={(e) => props.SetTone(e.target.value)}
            >
              <Form.Control placeholder="גוון" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="SetSpacing"
              onChange={(e) => props.SetSpacing(e.target.value)}
            >
              <Form.Control placeholder="הרחקות" />
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default Shoeing;