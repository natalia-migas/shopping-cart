import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartIcon from '../cart/CartIcon';

class Navbar extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    const { isTop } = this.state;
    return (
      <nav className={`navbar fixed-top ${!isTop ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            Women's Shoes
          </Link>
          <CartIcon />
        </div>
      </nav>
    );
  }
}

export default Navbar;
