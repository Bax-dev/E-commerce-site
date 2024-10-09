import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    axios.get('http://localhost:8000/api/cart/')
      .then(response => setCartItems(response.data))
      .catch(error => console.error('Error fetching cart:', error));
  };

  const updateCartItem = (id, quantity) => {
    axios.put(`http://localhost:8000/api/cart/${id}/`, { quantity })
      .then(response => {
        alert('Cart item updated: ' + response.data);

        fetchCartItems();  // Refresh cart items
      })
      .catch(error => {
        console.error('Error updating cart item:', error);
      });
  };

  const removeCartItem = (id) => {
    axios.delete(`http://localhost:8000/api/cart/${id}/`)
      .then(response => {
        console.log('Cart item removed:', response.data);
        fetchCartItems();  
      })
      .catch(error => {
        console.error('Error removing cart item:', error);
      });
  };

  return (
    <div className="offcanvas offcanvas-end" id="offcanvasCart">
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        <h4 className="d-flex justify-content-between align-items-center mb-4">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-circle pt-2">{cartItems.length}</span>
        </h4>
        <ul className="list-group mb-4">
          {cartItems.map(item => (
            <li key={item.product.id} className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">{item.product.name}</h6>
                <small className="text-body-secondary">{item.product.description}</small>
              </div>
              <span className="text-body-secondary">{item.product.price}</span>
              <div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateCartItem(item.id, e.target.value)}
                  style={{ width: '60px' }}
                />
                <button onClick={() => removeCartItem(item.id)} className="btn btn-danger btn-sm">Remove</button>
              </div>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <span className="fw-bold">Total (Naira)</span>
            <strong>₦{cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)}</strong>
          </li>
        </ul>
        <button className="w-100 btn btn-dark">Continue to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
