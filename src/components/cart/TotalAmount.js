import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePrice } from '../../actions/cartActions';

class TotalAmount extends Component {
  render() {
    const { totalPrice } = this.props.cart;
    return (
      <div className="total-amount">
        <p>
          <strong>Delivery</strong>
          <span>Free</span>
        </p>
        <p>
          <strong>Total</strong>
          {totalPrice} €
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

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { updatePrice }
)(TotalAmount);
