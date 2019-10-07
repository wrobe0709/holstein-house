import './title.scss';
import Button from 'react-bootstrap/Button';
import {Link} from "react-scroll";
import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <div id="title" className="title__container">
        <h1 className="title__heading">
          The Holstein House
        </h1>
        <h1 className="title__heading">
          A Place to Gather
        </h1>
        <div className="title__sub-heading">
          For scrapbooking, sewing, knitting, crafting, and quilting
        </div>
        <div role="navigation" className="title__button-container">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <Button className="title__button title--cursor-pointer" variant="outline-secondary" size="lg">About</Button>
          </Link>
          <Link
            activeClass="active"
            to="rates"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              <Button className="title__button title--cursor-pointer" variant="outline-secondary" size="lg">Rates</Button>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              <Button className="title__button title--cursor-pointer" variant="outline-secondary" size="lg">Contact</Button>
          </Link>
        </div>
      </div>
    );
  }
}
