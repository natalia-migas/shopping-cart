import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Products from './components/products/Products';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="header">
              <Navbar />
              <div className="container hero">
                <h1>Welcome at our shoe store</h1>
                <h2>Free Shipping!</h2>
                <a href="/" className="btn-main">
                  Products
                  <i className="fas fa-chevron-down" />
                </a>
              </div>
            </header>
            <section className="products" id="products">
              <Products />
            </section>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
