import React, { Component } from 'react';
import SortPrices from '../options/SortPrices';
import FilterByColor from '../options/FilterByColor';
import FilterByPrice from '../options/FilterByPrice';

class OptionsPanel extends Component {
  render() {
    return (
      <div className="options container">
        <div className="row">
          <FilterByColor />
          <FilterByPrice />
          <SortPrices />
        </div>
      </div>
    );
  }
}

export default OptionsPanel;
