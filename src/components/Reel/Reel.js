import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";

function Reel() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <img
          src="./assets/home-bg.jpg"
          alt="Hannah Folk doing a wushu salute in a red bomber jacket"
          className="home-bg-img"
        />
        <Row className="home-header">
          <h1 className="heading-name">
            <strong className="main-name">Hannah Folk</strong>
          </h1>
        </Row>
      </Container>
    </section>
  );
}

export default Reel;
