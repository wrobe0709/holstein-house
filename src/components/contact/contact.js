import './contact.scss';
import {faEnvelope, faMapPin, faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="card-container">
        <div className="heading">
          Contact
        </div>
        <div className="contact__map-container">
          <iframe
            className="contact--flex-1"
            title="Holstein House map loaction"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.9577638808814!2d-88.063761!3d43.98092299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88037113c81b9027%3A0x7e28fce56e723c4f!2sN2547+Co+Rd+T%2C+New+Holstein%2C+WI+53061!5e0!3m2!1sen!2sus!4v1437779582728"
            allowFullScreen>
          </iframe>
          <div className="contact--flex-1">
            <div className="contact__info-container">
              <div>
                <span className="contact--margin-right-10"><FontAwesomeIcon icon={faPhone} fixedWidth/></span>
                <span>715.797.6070</span>
              </div>
              <div>
                <span className="contact--margin-right-10"><FontAwesomeIcon icon={faEnvelope} fixedWidth/></span>
                <span>theholsteinhouse@gmail.com</span>
              </div>
              <div>
                <span className="contact--margin-right-10"><FontAwesomeIcon icon={faMapPin} fixedWidth/></span>
                <span>N2547 County Road T, New Holstein, WI 53061</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
