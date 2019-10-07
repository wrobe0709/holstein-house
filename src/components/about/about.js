import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div id="about" className="card-container">
        <div className="heading">
          What we have
        </div>
        <ul>
          <li>
            <strong>Large workspace</strong>
            - 15 workspaces on the main floor. 1 iron and ironing board. 2 design walls.
          </li>
          <li><strong>6 tables</strong>- 8 feet long with lights. </li>
          <li><strong>Kitchen</strong>
            - Gas stove, dishwasher, microwave, coffeemaker (and filters), toaster, hand mixer, blender, crock pot.
          </li>
          <li><strong>4 Bedrooms</strong>
            - 12 Single beds complete with sheets, pillows, and towels (one bed is downstairs in the living room).
          </li>
          <li><strong>3 Season Porch</strong></li>
          <li><strong>Air Conditioning</strong></li>
          <li><strong>TV and DVD Player (No cable)</strong></li>
          <li><strong>No WiFi</strong></li>
        </ul>
      </div>
    );
  }
}
