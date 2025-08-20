import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "./Form";

function Reel() {
  return (
    <Container
      fluid
      className="about-section animate__animated animate__fadeIn animate__delay-1s"
    >
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1>Contact</h1>
          <Col md={7}>
            <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>Agent</h2>
            <p>Love Talent Agency</p>
            <p>Jaime Love</p>
            <p>Commerical Agent</p>
            <a href="tel:323-401-8287">(323) 401-8287</a>
            <br />
            <a href="mailto:jaime@lovetalent.com">jaime@lovetalent.com</a>
          </Col>
          <Col md={5}>
            <Form />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Reel;
