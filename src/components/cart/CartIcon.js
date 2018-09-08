import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCart } from '../../actions/cartActions';
import PropTypes from 'prop-types';

class CartIcon extends Component {
  showCart = () => {
    const { showCart } = this.props;
    showCart();
  };

  render() {
    const { cartItems } = this.props.cart;
    return (
      <div className="cart-icon ml-auto">
        <button type="button" onClick={this.showCart}>
          <i className="fas fa-shopping-cart" />
          <span className="badge badge-primary">{cartItems.length}</span>
          <span className="sr-only">products</span>
        </button>
        <p>29.99 €</p>
      </div>
    );
  }
}

CartIcon.propTypes = {
  showCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { showCart }
)(CartIcon);
