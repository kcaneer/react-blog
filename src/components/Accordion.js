import React from "react";
import Ainc from "./img/logo.png";
import Ky from "./img/uk.jpg"
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
      <div className="row text-center d-block pb-4 pt-3 mt-5">
        <Button color="secondary" id="uk" style={{ marginBottom: "1rem" }}>
          What is my background?
        </Button>
        <UncontrolledCollapse toggler="#uk">
          <Card>
            <CardBody>
              <img src={Ky} className="text-left"></img>
              <div>
                I graduated from the University of Kentucky with a Bachelor's
                degree in Business Management and a minor in Economics. My first
                job post-graduation was as a Registered Client Service Associate
                at UBS Financial Services, Inc. here in Lexington. I gained a
                lot of priceless knowledge in my time there and also acquired my
                Series 7 and Series 66 licenses, along with my Life and Health
                Insurance licenses. My inspiration to make a career change came
                when I began working from home as a result of COVID-19. I
                realized that the flexibility and independence offered by a
                career in web development made it the perfect challenge for me.
                <br />
                <br />
                View my <a href="resume.pdf" id="resume">resume</a> for a more complete
                picture of my professional background.
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block mb-5 mt-3">
        <Button
          color="secondary"
          id="ainc"
          style={{ marginBottom: "1rem" }}
        >
          What am I doing now?
        </Button>
        <UncontrolledCollapse toggler="#ainc">
          <Card>
            <CardBody>
              <img src={Ainc} className="text-left"></img>
              <div className="text-center">
                I am currently in a Web Developer Bootcamp at Awesome Inc. My
                expected graduation date is December 11
                <sup>th</sup>. Upon graduation I will be equipped with the
                knowledge and tools to begin a career as a full stack web
                developer.
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
}

export default Accordion;
