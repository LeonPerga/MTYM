import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { useState, useContext } from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
import AuthContext from "../context/AuthService";


const Signup = () => {
  const [email, SetEmail] = React.useState("");
  const [password1, SetPassword1] = React.useState("");
  const [password2, SetPassword2] = React.useState("");
  const [first_name, SetFirstName] = React.useState("");
  const [last_name, SetLastName] = React.useState("");
  const [company_name, SetCompanyName] = React.useState("");
  const [company_adress, SetCompanyAdress] = React.useState("");
  const [company_phone, SetCompanyPhone] = React.useState("");

  function validateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
      SetEmail(input);
    }
  }
  function validatePassword(input) {
    var validRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (input.value.match(validRegex)) {
      if (password1 === "") {
        SetPassword1(input);
      } else {
        SetPassword2(input);
      }
    }
  }
  return (
    <div class="container h-101 d-flex justify-content-center text-right">
      <div class="jumbotron my-auto" dir="rtl">
        <Card>
          <Card.Body>
            <p style={{ fontSize: 30, fontWeight: "bold" }}>הרשמה</p>
            <hr></hr>
            <Container>
              <p style={{ fontSize: 20, fontWeight: "bold" }}>פרטי התחברות</p>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formCustomerAdress"
                    onChange={(e) => validateEmail(e.target.value)}
                  >
                    <Form.Control placeholder="אימייל" required="true" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formCustomerAdress"
                    onChange={(e) => validatePassword(e.target.value)}
                  >
                    <Form.Control placeholder="סיסמה" required="true" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formCustomerAdress"
                    onChange={(e) => validatePassword(e.target.value)}
                  >
                    <Form.Control placeholder="אימות סיסמה" required="true" />
                  </Form.Group>
                </Col>
              </Row>
              <hr id="hr"></hr>
              <p style={{ fontSize: 20, fontWeight: "bold" }}>פרטי חברה</p>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formCustomerAdress"
                    onChange={(e) => SetFirstName(e.target.value)}
                  >
                    <Form.Control placeholder="שם פרטי" required="true" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formCustomerAdress"
                    onChange={(e) => SetLastName(e.target.value)}
                  >
                    <Form.Control placeholder="שם משפחה" required="true" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formCustomerAdress"
                    onChange={(e) => SetCompanyName(e.target.value)}
                  >
                    <Form.Control placeholder="שם חברה" required="true" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formCustomerAdress"
                    onChange={(e) => SetCompanyAdress(e.target.value)}
                  >
                    <Form.Control placeholder="כתובת חברה" required="true" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="formCustomerAdress"
                    onChange={(e) => SetCompanyPhone(e.target.value)}
                  >
                    <Form.Control placeholder="טלפון חברה" required="true" />
                  </Form.Group>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col></Col>
                <Col >
                <div class="row" >
                  <button class="btn btn-success btn-lg" >
                    הרשם
                  </button>
                </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
