import React, { Component } from 'react';

class FilterByPrice extends Component {
  render() {
    return (
      <div className="col-md-2">
        <div className="form-group">
          <label htmlFor="filterPrice">Filter by price:</label>
          <select className="form-control" id="filterPrice">
            <option>- Select -</option>
            <option value="small">20 - 69 €</option>
            <option value="medium">70 - 129 €</option>
            <option value="big">130 - 159 €</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FilterByPrice;
