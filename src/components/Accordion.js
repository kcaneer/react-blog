import React from "react";
import Ainc from "./img/logo.png";
// import uk from './img/uk/jpg'
import {
  Collapse,
  Button,
  CardBody,
  Card,
  UncontrolledCollapse,
} from "reactstrap";

function Accordion() {
  return (
    <div>
      <div className="row text-center d-block pb-2">
        <Button color="secondary" id="lunch" style={{ marginBottom: "1rem" }}>
          What is my background?
        </Button>
        <UncontrolledCollapse toggler="#lunch">
          <Card>
            <CardBody>
              I graduated from the University of Kentucky with a Bachelor's
              degree in Business Management and a minor in Economics. My first
              job post-graduation was as a Registered Client Service Associate
              at UBS Financial Services, Inc. here in Lexington. I gained a lot
              of priceless knowledge in my time there and also acquired my
              Series 7 and Series 66 licenses, along with my Life and Health
              Insurance licenses. My inspiration to make a career change came
              when I began working from home as a result of COVID-19. I realized
              that the flexibility and independence offered by a career in web
              development made it the perfect challenge for me.
              <br />
              <br />
              View my <a href="resume.pdf">resume</a> for a more complete
              picture of my professional background.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block pb-2">
        <Button
          color="secondary"
          id="appetizers"
          style={{ marginBottom: "1rem" }}
        >
          What am I doing now?
        </Button>
        <UncontrolledCollapse toggler="#appetizers">
          <Card>
            <CardBody>
              I am currently in a Web Developer Bootcamp at Awesome Inc. My
              expected graduation date is December 11<sup>th</sup>. Upon
              graduation I will be equipped with the knowledge and tools to
              begin a career as a full stack web developer.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
}

export default Accordion;
