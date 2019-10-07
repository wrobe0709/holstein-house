import React from 'react';

export default class Rates extends React.Component {
  render() {
    return (
      <div id="rates" className="card-container">
        <div className="heading">
          Rates
        </div>
        <ul>
          <li><strong>$45</strong>- Sunday - Thursday.</li>
          <li><strong>$55</strong>- Friday - Saturday.</li>
          <li><strong>2 night</strong> minimum stay.</li>
          <li><strong>4 person</strong> minimum per night.</li>
        </ul>
      </div>
    );
  }
}
