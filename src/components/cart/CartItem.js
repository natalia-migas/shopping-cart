import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem, addItem, decrement } from '../../actions/cartActions';

class CartItem extends Component {
  onClick = id => {
    const { deleteItem } = this.props;
    deleteItem(id);
  };

  increment = () => {
    const { addItem } = this.props;
    addItem(this.props.item);
  };

  decrement = id => {
    const { item } = this.props;
    if (item.qty > 1) {
      const { decrement } = this.props;
      decrement(this.props.item);
    } else {
      const { deleteItem } = this.props;
      deleteItem(id);
    }
  };

  render() {
    const { item } = this.props;
    return (
      <React.Fragment>
        <div className="img-wrapper">
          <img className="img-fluid" src={item.picture} alt={item.name} />
        </div>
        <h4 className="name">{item.name}</h4>
        <div className="quantity">
          <p>
            Quantity:{' '}
            <button
              className="btn subtract"
              onClick={this.decrement.bind(this, item.id)}
            >
              -
            </button>
            {item.qty}
            <button className="btn add" onClick={this.increment.bind(this)}>
              +
            </button>
          </p>
        </div>
        <small className="price">{(item.price * item.qty).toFixed(2)} €</small>
        <button
          type="button"
          className="close"
          onClick={this.onClick.bind(this, item.id)}
        >
          &#xd7;
        </button>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { deleteItem, addItem, decrement }
)(CartItem);
