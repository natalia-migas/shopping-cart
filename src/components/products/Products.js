import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Product from './Product';
import Pagination from './Pagination';
import Spinner from '../layout/Spinner';

class Products extends Component {
  state = {
    products: [],
    pageOfItems: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.products });
  }

  onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

  render() {
    const { products } = this.state;
    if (products.length > 0) {
      return (
        <div className="products-wrapper">
          <div className="container">
            <div className="row">
              {this.state.pageOfItems.map(product => (
                <Product product={product} key={product.id} />
              ))}
              <Pagination items={products} onChangePage={this.onChangePage} />
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Products.propTypes = {
  firestore: PropTypes.object.isRequired,
  products: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'products' }]),
  connect((state, props) => ({
    products: state.firestore.ordered.products
  }))
)(Products);
