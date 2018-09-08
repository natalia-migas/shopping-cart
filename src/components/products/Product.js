import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/cartActions';

class Product extends Component {
  addClick = product => {
    this.props.addItem(product);
  };

  render() {
    const { product } = this.props;
    return (
      <div className="col-md-4">
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
              <button
                className="btn-custom"
                onClick={this.addClick.bind(this, product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addItem }
)(Product);
