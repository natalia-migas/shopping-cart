import React, { Component } from 'react';
import SortPrices from '../options/SortPrices';

class OptionsPanel extends Component {
  render() {
    return (
      <div className="options container">
        <div className="row">
          <SortPrices />
        </div>
      </div>
    );
  }
}

export default OptionsPanel;
