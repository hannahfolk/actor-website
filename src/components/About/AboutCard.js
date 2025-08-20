import React from "react";
import Card from "react-bootstrap/Card";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hannah Folk is an action-driven actor and martial artist.
            Growing up as a dancer, the love of performing was instilled in her
            at an early age, but she didn't dive into acting until her time at UC San Diego.
            Growing up in the San Francisco Bay Area, she was encouraged to
            be academically focused on STEM-related subjects, eventually leading
            her to major in Math and Econ. However, it was at UC San Diego that
            her love for the acting began to flourish, and she ended up
            graduating with an additional degree in Theatre.
            <br />
            <br />
            Currently based in <span className="maroon">Los Angeles, CA</span>,
            she spends her time training for wushu competitions, going to theme parks, and working remotely as a Software Engineer.
            <br />
            <br />
            And yes, she coded out this website.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export { AboutCard };
