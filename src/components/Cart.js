import React from "react";

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="p-4 border rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-1">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <p className="font-semibold mt-2">Total: ${total}</p>
    </div>
  );
};

export default Cart;
