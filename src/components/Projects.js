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
    <div className='pt-5' id="portfolio">
      <h1 className="pb-5 pt-5">
        Portfolio
      </h1>
      <Media className="col col-6 mb-2">
        <Media left href="https://kcaneer.github.io/campaign/" target="_blank">
          <Media src={firstImg} alt="first project" />
        </Media>
        <Media body className="pl-3 my-auto">
          <Media heading>
            <a href="https://kcaneer.github.io/campaign/" target="_blank">
              Michael Scotts campaign website
            </a>
          </Media>
          <strong>Instructions: </strong>Create a campaign website for a
          fictional character
        </Media>
      </Media>
      <Media className="col col-6 mb-2">
        <Media
          left
          href="https://kcaneer.github.io/read-your-mind/"
          target="_blank"
        >
          <Media src={secondImg} alt="second project" />
        </Media>
        <Media body className="pl-3 my-auto">
          <Media heading>
            <a href="https://kcaneer.github.io/read-your-mind/" target="_blank">
              Mind Reader
            </a>
          </Media>
          <strong>Instructions: </strong>Create an SPA mind reader application
        </Media>
      </Media>
      <Media className="col col-6 mb-2">
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
      <Media className="col col-6 mb-2">
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
      <Media className="col col-6 mb-2">
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
      <Media className="col col-6 pb-5">
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
      {/* <Media className="col col-6">
        <Media left href="https://kcaneer.github.io/campaign/">
          <Media src={sixthImg} alt="first project" />
        </Media>
        <Media body className="pl-3 my-auto">
          <Media heading>
            <a href="https://kcaneer.github.io/campaign/" target="_blank">
              Michael Scotts campaign website
            </a>
          </Media>
          <strong>Instructions: </strong>Create a campaign website for a
          fictional character
        </Media>
      </Media> */}
      {/* <Media className="col col-6">
        <Media left href="https://kcaneer.github.io/campaign/">
          <Media src={seventhImg} alt="first project" />
        </Media>
        <Media body className="pl-3 my-auto">
          <Media heading>
            <a href="https://kcaneer.github.io/campaign/" target="_blank">
              Michael Scotts campaign website
            </a>
          </Media>
          <strong>Instructions: </strong>Create a campaign website for a
          fictional character
        </Media>
      </Media> */}
      {/* <Media className="col col-6">
        <Media left href="https://kcaneer.github.io/campaign/">
          <Media src={eighthImg} alt="first project" />
        </Media>
        <Media body className="pl-3 my-auto">
          <Media heading>
            <a href="https://kcaneer.github.io/campaign/" target="_blank">
              Michael Scotts campaign website
            </a>
          </Media>
          <strong>Instructions: </strong>Create a campaign website for a
          fictional character
        </Media>
      </Media> */}
    </div>
  );
}

export default Projects;
