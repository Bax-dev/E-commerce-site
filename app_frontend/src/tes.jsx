import React, { useState } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

const NavBar = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [viewedProducts, setViewedProducts] = useState([]);

  // Handler to add product to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log("Product added to cart:", product);
  };

  // Handler to view a product
  const handleViewProduct = (product) => {
    setViewedProducts([...viewedProducts, product]);
    console.log("Product viewed:", product);
  };

  // Handler to add product to wishlist
  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    console.log("Product added to wishlist:", product);
  };

  return (
    <div>
      <Cart cartItems={cart} />

      <nav className="main-menu d-flex navbar fixed-top navbar-expand-lg py-4 ">
        <div className="container">
          <div className="main-logo">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" className="img-fluid" />
            </a>
          </div>

          {/* Other navbar content */}
        </div>
      </nav>

      {/* Product list component with handlers passed as props */}
      <ProductList
        addToCart={handleAddToCart}
        addToWishlist={handleAddToWishlist}
        viewProduct={handleViewProduct}
      />
    </div>
  );
};

export default NavBar;
