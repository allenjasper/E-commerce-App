import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.name} style={{ width: '100px' }} />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product; 