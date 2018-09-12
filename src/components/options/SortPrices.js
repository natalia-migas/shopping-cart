import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';
import { sortPrices } from '../../actions/productsActions';

class SortPrices extends Component {
  static propTypes = {
    firebase: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  };
  state = {
    value: 'select'
  };
  onChange = (sortType, e) => {
    this.props.firebase.push('products', { some: 'price' }).then(() => {
      this.setState({ value: e.target.value });
      this.props.sortPrices(sortType);
    });
  };
  render() {
    return (
      <div className="col-md-2">
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

export default firebaseConnect(null, { sortPrices })(SortPrices);
