import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";


  const Handles = props => {
    if (props.step !== 8) {
      return null;
    }
  
    return (
      <div dir="rtl">
        <Container>
        <h1>ידיות</h1>
        <hr/>
        <Row md={4}>
          <Col>
            <Button
              onClick={() => props.SetHandle("handle 1")}
            ></Button>
          </Col>
          <Col>
            <Button
              onClick={() => props.SetHandle("handle 2")}
            ></Button>
          </Col>
          <Col>
            <Button
              onClick={() => props.SetHandle("handle 3")}
            ></Button>
          </Col>
        </Row>
        <Row md={4}>
          <Col>
            <Button
              onClick={() => props.SetHandle("handle 4")}
            ></Button>
          </Col>
          <Col>
            <Button
              onClick={() => props.SetHandle("handle 5")}
            ></Button>
          </Col>
          <Col>
            <Button
              onClick={() => props.SetHandle("handle 6")}
            ></Button>
          </Col>
        </Row>
        <div class="row mt-3"></div>
      </Container>
      </div>
    );
  };
  
  export default Handles;