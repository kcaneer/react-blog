import React from "react";
import { Media } from "reactstrap";
import firstImg from "./img/1.png";
import secondImg from "./img/2.png";
import thirdImg from "./img/3.png";
import fourthImg from "./img/4.png";
import fifthImg from "./img/5.png";
import sixthImg from "./img/6.png";
import seventhImg from "./img/7.png";

function Projects() {
  return (
    <div>
      <div className="pt-5" id="portfolio">
        <h1 className="pt-5">Portfolio</h1>
        <p>
          *these are in the order of project completion <br></br>if you are
          looking for my most recent work<br></br> check out my final project
          (Project 7)
        </p>
      </div>
      <div>
        <Media className="col col-6 mb-2 mx-auto">
          <Media left href="https://countdown-d3c87.web.app/" target="_blank">
            <Media src={firstImg} alt="first project" />
          </Media>
          <Media body className="pl-3 my-auto">
            <Media heading>
              <a href="https://countdown-d3c87.web.app/" target="_blank">
                Countdown Timer
              </a>
            </Media>
            <strong>Instructions: </strong>Create a countdown application using JS.
          </Media>
        </Media>
        <Media className="col col-6 mb-2 mx-auto">
          <Media
            left
            href="https://kcaneer.github.io/mind-reader/"
            target="_blank"
          >
            <Media src={secondImg} alt="second project" />
          </Media>
          <Media body className="pl-3 my-auto">
            <Media heading>
              <a href="https://kcaneer.github.io/mind-reader/" target="_blank">
                Mind Reader
              </a>
            </Media>
            <strong>Instructions: </strong>Create an SPA mind reader application
          </Media>
        </Media>
        <Media className="col col-6 mb-2 mx-auto">
          <Media left href="https://kcaneer.github.io/weather-app/">
            <Media src={thirdImg} alt="third project" />
          </Media>
          <Media body className="pl-3 my-auto">
            <Media heading>
              <a href="https://kcaneer.github.io/weather-app/" target="_blank">
                Weather App
              </a>
            </Media>
            <strong>Instructions: </strong>Build a weather application.
          </Media>
        </Media>
        <Media className="col col-6 mb-2 mx-auto">
          <Media left href="https://kcaneer.github.io/tictactoe/">
            <Media src={fourthImg} alt="fourth project" />
          </Media>
          <Media body className="pl-3 my-auto">
            <Media heading>
              <a href="https://kcaneer.github.io/tictactoe/" target="_blank">
                Tic Tac Toe
              </a>
            </Media>
            <strong>Instructions: </strong>Create a Tic Tac Toe game.
          </Media>
        </Media>
        <Media className="col col-6 mb-2 mx-auto">
          <Media left href="https://kcaneer.github.io/tictactoe/">
            <Media src={fifthImg} alt="fifth project" />
          </Media>
          <Media body className="pl-3 my-auto">
            <Media heading>
              <a href="https://restaurant-menu-2eba8.web.app/" target="_blank">
                Restaurant Menu
              </a>
            </Media>
            <strong>Instructions: </strong>Build a restaurant menu with an Axios
            call to pre-determined API.
          </Media>
        </Media>
        <Media className="col col-6 mb-2 mx-auto">
          <Media left href="https://puzzle-slider-9cd28.web.app/">
            <Media src={sixthImg} alt="first project" />
          </Media>
          <Media body className="pl-3 my-auto">
            <Media heading>
              <a href="https://puzzle-slider-9cd28.web.app/" target="_blank">
                Puzzle Slider
              </a>
            </Media>
            <strong>Instructions: </strong>Create a puzzle sliding game using
            React & hooks.
          </Media>
        </Media>
        <Media className="col col-6 pb-5 mx-auto">
          <Media left href="#">
            <Media src={seventhImg} alt="final project" />
          </Media>
          <Media body className="pl-3 my-auto">
            <Media heading>
              <a href="#" target="_blank">
                GoodListens
              </a>
            </Media>
            <strong>Final Project: </strong>I built a Goodreads clone for
            podcasts. A place where podcast lovers can give and receive
            recommendations, rate the podcasts they listen to, and keep a list
            of the podcasts they intend to listen to.
          </Media>
        </Media>
      </div>
    </div>
  );
}

export default Projects;
