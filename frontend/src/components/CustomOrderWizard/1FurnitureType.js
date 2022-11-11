import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const FurnitureType = (props) => {
  if (props.step !== 1) {
    return null;
  }
  return (
    <div class="container d-flex justify-content-center" dir="rtl">
      <Container>
      
        <Row>
          <Col>
            <Button onClick={() => props.SetRoomType("kitchen")}>
              מטבחים
              <img
                src={"https://i.imgur.com/oRceEYg.png"}
                width="42"
                height="42"
              />
            </Button>
          </Col>
          <Col>
            <Button onClick={() => props.SetRoomType("closets")}>
              ארונות
              <img
                src={"https://i.imgur.com/oRceEYg.png"}
                width="42"
                height="42"
              />
            </Button>
          </Col>
        </Row>
        <div class="row mt-3"></div>
        <Row>
          <Col>
            <Button onClick={() => props.SetRoomType("bathroom closets")}>
              ארונות אמבטיה
              <img
                src={"https://i.imgur.com/Jl7mCvH.png"}
                width="42"
                height="42"
              />
            </Button>
          </Col>
          <Col>
            <Button onClick={() => props.SetRoomType("libraries")}>
              ספריות
              <img
                src={"https://i.imgur.com/7MXswtB.png"}
                width="42"
                height="42"
              />
            </Button>
          </Col>
        </Row>
        <div class="row mt-3"></div>
      </Container>
    </div>
  );
};

export default FurnitureType;
