import React, { useState } from "react";
import Cart from "./Cart";

const NavBar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // For viewing a single product

  // Handle adding to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1; // Update quantity if it exists
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity: 1 }]; // Add new item
    });
  };

  return (
    <div>
      <nav className="main-menu d-flex navbar fixed-top navbar-expand-lg py-4">
        <div className="container">
          <div className="main-logo">
            <a href="/">
            <h1 style={{ fontSize: '25px' }}>Street Wears</h1>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header justify-content-center">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body justify-content-between">
              <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 ps-lg-5 mb-0">
                <li className="nav-item">
                  <a href="/" className="nav-link mx-2 active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/shop" className="nav-link mx-2">
                    Shop
                  </a>
                </li>
                {/* More nav items */}
              </ul>

              <div className="d-none d-lg-flex align-items-end">
                <ul className="d-flex justify-content-end list-unstyled m-0">
                  <li>
                    <a href="/login" className="mx-3">
                      <iconify-icon
                        icon="healthicons:person"
                        className="fs-4"
                      ></iconify-icon>
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html" className="mx-3">
                      <iconify-icon icon="mdi:heart" className="fs-4"></iconify-icon>
                      <span className="position-absolute translate-middle badge rounded-circle bg-primary">
                        {wishlistItems.length}
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="mx-3"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasCart"
                      aria-controls="offcanvasCart"
                    >
                      <iconify-icon
                        icon="mdi:cart"
                        className="fs-4 position-relative"
                      ></iconify-icon>
                      <span className="position-absolute translate-middle badge rounded-circle bg-primary">
                        {cartItems.length}
                      </span>
                    </a>
                  </li>
                  {/* Search */}
                  <li>
                    <a
                      href="#"
                      className="mx-3"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasSearch"
                      aria-controls="offcanvasSearch"
                    >
                      <iconify-icon
                        icon="tabler:search"
                        className="fs-4"
                      ></iconify-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Optionally, show product details in a modal if needed */}
      {selectedProduct && (
        <div className="modal">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          {/* Modal content */}
        </div>
      )}

      <Cart cartItems={cartItems} />
    </div>
  );
};

export default NavBar;
