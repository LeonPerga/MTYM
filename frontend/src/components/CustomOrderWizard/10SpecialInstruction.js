import React, { Component } from "react";
import { Form, Button, input, Row, Col, Container } from "react-bootstrap";

const SpecialInstruction = (props) => {
  if (props.step !== 10) {
    return null;
  }
  return (
    <div dir="rtl">
      <Container>
        <h1 >הערות מיוחדות</h1>
        <hr/>
        <Row>
          <Col style={{ margin: "auto" }}>פרקט</Col>
          <Col style={{ margin: "auto", marginRight: "-27%" }}>
            <Form.Check
              type="checkbox"
              onClick={() => props.SetParquet(!props.parquet)}
            />
          </Col>
          <Col class="center">
            <Form.Group className="mb-3" controlId="size">
              <Form.Label />
              <Form.Control placeholder="מידה" disabled={!props.parquet} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{ margin: "auto" }}>תאורת לד</Col>
          <Col style={{ margin: "auto", marginRight: "-60%" }}>
            <Form.Check
              type="checkbox"
              onClick={() => props.SetLed(!props.led)}
            />
          </Col>
        </Row>
        <div class="row mt-3"></div>
        <Row>
          <div
            class="form-group"
            onChange={(e) => props.SetHangingMethod(e.target.value)}
          >
            <label for="exampleFormControlSelect1">שיטת תליית ארגזים</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div
            class="form-group"
            onChange={(e) => props.SetClosing(e.target.value)}
          >
            <label for="exampleFormControlSelect1">סגירות</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </Row>
        <Row>
          <div
            class="form-group"
            onChange={(e) => props.SetLegs(e.target.value)}
          >
            <label for="exampleFormControlSelect1" >רגליים/דקו'</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </Row>
        <Row>
          <Col style={{ margin: "auto" }}>עובי שיש במ"מ</Col>
          <Col>
            <Form.Group 
              className="mb-3"
              controlId="size"
              style={{ margin: "auto" }}
            >
              <Form.Label></Form.Label>
              <Form.Control onChange={(e) => props.SetMarbleThickness(e.target.value)} placeholder="מידה" />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col style={{ margin: "auto" }}>גובה סופי - כולל שיש במ"מ</Col>
          <Col>
            <Form.Group 
              className="mb-3"
              controlId="size"
              style={{ margin: "auto" }}
            >
              <Form.Label></Form.Label>
              <Form.Control onChange={(e) => props.SetFinalHeight(e.target.value)} placeholder="מידה" />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col style={{ margin: "auto" }}>משטחים עליונים</Col>
          <Col><Form.Group className="mb-3" controlId="size">
              <Form.Label />
              <Form.Control onChange={(e) => props.SetTopSurfacesType(e.target.value)} placeholder="סוג"  />
            </Form.Group></Col>
          <Col><Form.Group className="mb-3" controlId="size">
              <Form.Label />
              <Form.Control onChange={(e) => props.SetTopSurfacesThickness(e.target.value)} placeholder="עובי"  />
            </Form.Group></Col>

        </Row>

      </Container>
    </div>
  );
};

export default SpecialInstruction;
