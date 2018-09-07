import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPrices } from '../../actions/productsActions';

class SortPrices extends Component {
  state = {
    value: 'select'
  };
  onChange = (sortType, e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
    this.props.sortPrices(sortType);
  };
  render() {
    return (
      <div className="col-md-2 ml-auto">
        <div className="form-group">
          <label htmlFor="sort">Sort by:</label>
          <select
            className="form-control"
            id="sort"
            onChange={this.onChange.bind(this, this.state.value)}
          >
            <option>- Select -</option>
            <option value="desc">Lowest price</option>
            <option value="asc">Highest price</option>
          </select>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { sortPrices }
)(SortPrices);
