import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

class App extends Component {
  state = {
    products: [],
    cart: []
  };

  componentDidMount() {
    // Simulating fetching product data
    const products = [
      { id: 1, name: 'Laptop', price: 1000, image: 'https://benstore.com.ph/34222-medium_default/microsoft-surface-laptop-138-touch-snapdragon-x-elite-integrated-qualcomm-adreno-16gb-lpddr5x-512gb-ssd-black-.jpg' },
      { id: 2, name: 'Phone', price: 500, image: 'https://www.zdnet.com/a/img/resize/9f3fcf92f17d47c88823e7f2c0f1454ecd3e5140/2024/09/19/8da68e24-08b1-467a-9062-a90a96c1d879/dsc02198.jpg?auto=webp&fit=crop&height=900&width=1200' },
      { id: 3, name: 'Headphones', price: 200, image: 'https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/large_transparent/ce632827adec4e1842caa762f10e643d.png' }
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
