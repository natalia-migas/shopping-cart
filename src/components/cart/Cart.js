import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showCart, addItem } from '../../actions/cartActions';
import CartItem from './CartItem';
import TotalAmount from './TotalAmount';
import uuid from 'uuid';

class Cart extends Component {
  showCart = () => {
    const { showCart } = this.props;
    showCart();
  };

  render() {
    const { isOpen, cartItems } = this.props.cart;
    return (
      <div className={`cart ${!isOpen ? 'transparent' : ''}`}>
        <div className={`cart-inside ${isOpen ? 'active' : ''}`}>
          <h2>Shopping cart</h2>
          <button type="button" className="close" onClick={this.showCart}>
            &#xd7;
          </button>
          <Scrollbars style={{ height: '65%' }}>
            <div className="items">
              {cartItems.length === 0 ? (
                <h3>
                  Nothing was added yet <i className="far fa-frown" />
                </h3>
              ) : (
                <ul>
                  {cartItems.map(item => (
                    <li key={uuid()}>
                      <CartItem item={item} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Scrollbars>
          <TotalAmount />
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
  { showCart, addItem }
)(Cart);
