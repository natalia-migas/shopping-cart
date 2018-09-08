import React, { Component } from 'react';

class TotalAmount extends Component {
  render() {
    return (
      <div className="total-amount">
        <p>
          <strong>Delivery</strong>
          <span>Free</span>
        </p>
        <p>
          <strong>Total</strong>
          199.99 €
        </p>
        <div className="text-center">
          <button type="button" className="btn-custom disabled" disabled>
            Go to checkout
          </button>
        </div>
      </div>
    );
  }
}

export default TotalAmount;
