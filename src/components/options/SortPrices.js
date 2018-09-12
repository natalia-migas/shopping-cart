import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPrices } from '../../actions/sortingActions';

class SortPrices extends Component {
  onChange = e => {
    if (e.target.value !== 'init') {
      this.props.sortPrices(e.target.value);
    }
  };
  render() {
    return (
      <div className="col-md-3 ml-auto">
        <div className="form-group">
          <label htmlFor="sort">Sort by:</label>
          <select
            className="form-control"
            id="sort"
            onChange={this.onChange.bind(this)}
          >
            <option value="init">- Select -</option>
            <option value="asc">Lowest price</option>
            <option value="desc">Highest price</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sortBy: state.firestore.ordered.products
  };
};

export default connect(
  mapStateToProps,
  { sortPrices }
)(SortPrices);
