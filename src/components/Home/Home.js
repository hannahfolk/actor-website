import { Container } from "react-bootstrap";
import Type from "./Type";

function Home() {
  return (
    <Container fluid className="home-section" id="home">
      <div className="home-header">
        <h1 className="heading-name animate__animated animate__fadeIn animate__delay-2s">
          <strong className="main-name">Hannah Folk</strong>
        </h1>
        <div className="typewriter animate__animated animate__fadeIn animate__delay-3s">
          <Type />
        </div>
      </div>
    </Container>
  );
}

export default Home;
