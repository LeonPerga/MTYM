import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const OpeningMechanisms = (props) => {
  if (props.step !== 7) {
    return null;
  }

  return (
    <div dir="rtl">
      <Container>
        <h3>קלאפות/ מנגנוני פתיחה /מתקנים פנימיים</h3>
        <hr/>
        <Row md={4}>
          <Col>
            <Button
              onClick={() => props.SetOpeningMechanism("mechanism 1")}
            ></Button>
          </Col>
          <Col>
            <Button
              onClick={() => props.SetOpeningMechanism("mechanism 2")}
            ></Button>
          </Col>
          <Col>
            <Button
              onClick={() => props.SetOpeningMechanism("mechanism 3")}
            ></Button>
          </Col>
        </Row>
        <Row md={4}>
          <Col>
            <Button
              onClick={() => props.SetOpeningMechanism("mechanism 4")}
            ></Button>
          </Col>
          <Col>
            <Button
              onClick={() => props.SetOpeningMechanism("mechanism 5")}
            ></Button>
          </Col>
          <Col>
            <Button
              onClick={() => props.SetOpeningMechanism("mechanism 6")}
            ></Button>
          </Col>
        </Row>
        <div class="row mt-3"></div>
      </Container>
    </div>
  );
};

export default OpeningMechanisms;
