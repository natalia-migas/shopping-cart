import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Link } from 'react-scroll';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Cart from './components/cart/Cart';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="header">
              <Navbar />
              <div className="container hero">
                <h1>Welcome to our shoe store</h1>
                <h2>Free Shipping!</h2>
                <Link
                  to="products"
                  className="btn-main"
                  smooth={true}
                  offset={50}
                  duration={800}
                  onSetActive={this.handleSetActive}
                >
                  Products
                  <i className="fas fa-chevron-down" />
                </Link>
              </div>
            </header>
            <section name="products" className="products" id="products">
              <Dashboard />
            </section>
            <Cart />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
