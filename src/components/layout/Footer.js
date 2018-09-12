import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          2018 &copy; Natalia Migas{' '}
          <a
            href="http://webdevnatalia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            webdevnatalia.com
          </a>
          . All rights reserved.
        </p>
        <p>Product's photos come from zalando.pl</p>
      </footer>
    );
  }
}

export default Footer;
