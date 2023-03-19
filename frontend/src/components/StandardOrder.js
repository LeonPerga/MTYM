import Sidebar from "./sidebar";
import { Container, Row, Col, Form, Button, Image, Card } from "react-bootstrap";
import React from "react";
export default StandardOrder;

function StandardOrder() {
    return (
      <>
      <Col>
        <Row>
          <Sidebar />
        </Row>
        <Row>
            <Container>
            <a
              class="btn"
              data-bs-toggle="collapse"
              href="#OrderLevelSettings"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
              
            >
              הגדרות הזמנה
            </a>
            <div id="OrderLevelSettings">
              <Card>
                <Card.Body>
                    לורם איפסום
                </Card.Body>
              </Card>
            </div>
          </Container>
          <Container>
            <Card></Card>
          </Container>
        </Row>
        </Col>
      </>
    );

}