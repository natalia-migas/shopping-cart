import React, { Component } from 'react';

class CartIcon extends Component {
  render() {
    return (
      <div className="cart ml-auto">
        <button type="button">
          <i className="fas fa-shopping-cart" />
          <span className="badge badge-primary">9</span>
          <span className="sr-only">products</span>
        </button>
        <p>29.99 €</p>
      </div>
    );
  }
}

export default CartIcon;
