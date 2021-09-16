import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

import slide1 from "../images/slide1.jpg"
import slide2 from "../images/slide2.jpg"
import slide3 from "../images/slide3.jpg"

function ControlledCarousel() {
  return (
    <Carousel fade className="w-100">
      <Carousel.Item as={Link} to="/sets">
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Twoje zestawy</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={Link} to="/test">
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Test</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={Link} to="/learning">
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Nauka</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

  export default ControlledCarousel;
