import React, { Component } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

class App extends Component {
  state = {
    products: [],
    cart: []
  };

  componentDidMount() {
    // Simulating fetching product data
    const products = [
      { id: 1, name: 'Laptop', price: 1000, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Phone', price: 500, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Headphones', price: 200, image: 'https://via.placeholder.com/150' }
    ];
    this.setState({ products });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      console.log('Cart updated:', this.state.cart);
    }
  }

  addToCart = (product) => {
    this.setState((prevState) => {
      const cartItem = prevState.cart.find((item) => item.id === product.id);
      if (cartItem) {
        return {
          cart: prevState.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }
      return { cart: [...prevState.cart, { ...product, quantity: 1 }] };
    });
  };

  

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id)
    }));
  };

  render() {
    return (
      <div>
        <h1>Basic E-Commerce App</h1>
        <ProductList products={this.state.products} addToCart={this.addToCart} />
        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} clearCart={this.clearCart} />
      </div>
    );
  }
}

export default App;
