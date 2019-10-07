import './welcome.scss';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return (
      <div id="welcome" className="card-container">
        <div className="heading">
          Welcome
        </div>
        <Carousel controls="false">
          <Carousel.Item>
            <img
              src="/img/back.jpg"
              alt="Back of the hose"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/workspace.jpg"
              alt="Workspace"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/porch.jpg"
              alt="Porch"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/dining.jpg"
              alt="Dining area"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/living.jpg"
              alt="Living area"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/porch2.jpg"
              alt="Porch"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/bedroom.jpg"
              alt="Bedroom"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
