import React from "react";
import { Container, Row, Col, Form, Button, Image, Card } from "react-bootstrap";
const Sidebar = (props) => {

    return (
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span class="fs-4">פרטי הזמנה</span>
        </a>
        <hr />
        <Form.Group
          className="mb-3"
          controlId="formCustomerAdress"
          onChange={(e) => props.SetOrderName(e.target.value)}
        >
          <Form.Control placeholder="שם ההזמנה" />
        </Form.Group>
        <input id="startDate" class="form-control" type="date" placeholder="תאריך" />
        <hr />
      </div>
    );
};

export default Sidebar;