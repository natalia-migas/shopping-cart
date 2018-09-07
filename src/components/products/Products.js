import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Pagination from './Pagination';

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
    if (products.length > 1) {
      return (
        <div className="products-wrapper">
          <div className="container">
            <div className="row">
              {this.state.pageOfItems.map(product => (
                <div key={product.id} className="col-md-4">
                  <div className="card">
                    <img
                      className="card-img-top img-fluid"
                      src={product.picture}
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="price">{product.price} €</p>
                      <ul className="colors">
                        <li>Colors:</li>
                        {product.colors.map(color => (
                          <li className={`color ${color}`}>
                            <p className="sr-only">{color}</p>
                          </li>
                        ))}
                      </ul>
                      <ul className="sizes">
                        {product.sizes.map(size => (
                          <li>{size}</li>
                        ))}
                      </ul>
                      <div className="text-center">
                        <a href="#products" className="btn-custom">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Pagination items={products} onChangePage={this.onChangePage} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="spinner">
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      );
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
