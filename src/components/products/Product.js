import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/cartActions';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

class Product extends Component {
  state = {
    open: false
  };
  addClick = product => {
    this.setState({ open: true });
    const { addItem } = this.props;
    addItem(product);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { product } = this.props;
    const { classes } = this.props;
    return (
      <div className="col-sm-6 col-md-4">
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
                <li className={`color ${color}`} key={uuid()}>
                  <p className="sr-only">{color}</p>
                </li>
              ))}
            </ul>
            <ul className="sizes">
              {product.sizes.map(size => (
                <li key={uuid()}>{size}</li>
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
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Item added!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addItem }
)(withStyles(styles)(Product));
