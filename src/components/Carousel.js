import React from "react";
import Colorado from "./img/colorado.jpeg";
import Headshot from "./img/kennedy.jpg";

function Carousel() {
  return (
    <div className="myCarousel container pt-1 mt-5" id="about">
      <div className="row pt-3 center-block bg-light">
        <div className="col-lg-5 center-block mx-auto">
          <div
            id="carouselExampleIndicators"
            className="carousel slide my-4"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  className="d-block w-50 img-fluid mx-auto"
                  src={Headshot}
                  alt="First slide"
                />
              </div>

              <div className="carousel-item">
                <img
                  className="d-block w-50 img-fluid mx-auto"
                  src={Colorado}
                  alt="Second slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
