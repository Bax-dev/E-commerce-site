import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const Base = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.product.id === newItem.product.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1; // Update quantity
        return updatedItems;
      }
      return [...prevItems, { ...newItem, quantity: 1 }]; // Add new item
    });
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Base;
