import React from "react";
import { Container } from "react-bootstrap";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <div className="home-header">
          <h1 className="heading-name">
            <strong className="main-name">Hannah Folk</strong>
          </h1>

          <div className="typewriter">
            <Type />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
