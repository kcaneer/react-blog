import React from "react";
import Ainc from "./img/logo.png";
import Ky from "./img/uk.jpg"
import resume from './resume.pdf'
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
                realized that the challenge along with the flexibility and
                independence offered by a career in web development made it the
                perfect fit for me.
                <br />
                <br />
                View my{" "}
                <a
                  href={resume}
                  id="resume"
                  target="_blank"
                >
                  resume
                </a>{" "}
                for a more complete picture of my professional background.
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <div className="row text-center d-block mb-5 mt-3">
        <Button color="secondary" id="ainc" style={{ marginBottom: "1rem" }}>
          What am I doing now?
        </Button>
        <UncontrolledCollapse toggler="#ainc">
          <Card>
            <CardBody>
              <img src={Ainc} className="text-left"></img>
              <div className="text-center">
                In December I graduated from Awesome Inc's web developer bootcamp. During my 16 weeks there I was emmersed in all things Javascript and PHP. Now I am working on continuing my education by taking online courses and reworking my portfolio. Specifically, I am taking Harvard's CS50 course, Udemy's "React: The Complete Guide" course and Udemy's "The Ultimate MySQL Bootcamp" to take a deeper dive into CS fundamentals and build on my React knowledge.
             </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
}

export default Accordion;
