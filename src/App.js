import React, { useState } from "react";
import ProductList from "./components/ProductList";

const products = [
  { id: 1, name: "Laptop", price: 1000, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: 500, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 200, image: "https://via.placeholder.com/150" },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">E-Commerce App</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
