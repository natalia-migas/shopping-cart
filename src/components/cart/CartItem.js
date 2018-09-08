import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/cartActions';

class CartItem extends Component {
  onClick = id => {
    const { deleteItem } = this.props;
    deleteItem(id);
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
            Quantity: <button className="btn subtract">-</button>1
            <button className="btn add">+</button>
          </p>
        </div>
        <small className="price">{item.price} €</small>
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
  { deleteItem }
)(CartItem);
