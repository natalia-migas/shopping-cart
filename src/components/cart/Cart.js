import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showCart } from '../../actions/cartActions';

class Cart extends Component {
  showCart = () => {
    const { showCart } = this.props;
    showCart();
  };

  render() {
    const { isOpen } = this.props.cart;
    return (
      <div className={`cart ${!isOpen ? 'transparent' : ''}`}>
        <div className={`cart-inside ${isOpen ? 'active' : ''}`}>
          <h2>Shopping cart</h2>
          <button type="button" className="close" onClick={this.showCart}>
            &#xd7;
          </button>
          <Scrollbars style={{ height: '65%' }}>
            <div className="items">
              <ul>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>lgvnlrgvjbnlrgkl</li>
                <li>last</li>
              </ul>
            </div>
          </Scrollbars>
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
  { showCart }
)(Cart);
