import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Reel() {
  return (
    <Container
      fluid
      className="about-section animate__animated animate__fadeIn animate__delay-1s"
    >
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={5} className="about-img">
            <img
              src="./assets/about.jpg"
              alt="Hannah Folk in a red dress in NYC"
              className="img-fluid"
            />
          </Col>
          <Col md={7} className="about-paragraph-col">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              A Mesh of Entertainment and Technology
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Reel;
