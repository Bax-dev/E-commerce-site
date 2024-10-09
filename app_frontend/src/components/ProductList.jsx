import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductItem = ({ product, handleAddToCart }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    product.has_offer && product.offer_expiry
      ? Math.floor((new Date(product.offer_expiry) - new Date()) / 1000)
      : null
  );

  useEffect(() => {
    let timer;
    if (timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setTimeRemaining(null);
    }
    return () => clearInterval(timer);
  }, [timeRemaining]);

  return (
    <div className="col-md-6 col-lg-3 my-4">
      <div className="product-item position-relative">
        {/* New badge */}
        {product.is_new && (
          <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle bg-light">
            New
          </div>
        )}

        {/* Sold badge */}
        {product.sold && (
          <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle bg-light">
            Sold
          </div>
        )}

        {/* Countdown Timer */}
        {product.has_offer && timeRemaining !== null && (
          <div style={{ marginLeft: "20px" }} className="offer-countdown z-1 position-absolute m-3 px-3 border border-dark bg-light text-dark rounded-3">
            {timeRemaining > 0
              ? `Edends in: ${Math.floor(timeRemaining / 3600)}h ${Math.floor((timeRemaining % 3600) / 60)}m ${timeRemaining % 60}s`
              : "Offer Expired"}
          </div>
        )}

        <div className="image-holder">
          <img
            src={product.image}
            alt={product.name}
            className="product-image img-fluid"
          />
        </div>
        <div className="cart-concern">
          <div className="cart-button d-flex justify-content-between align-items-center">
            <a
              href="#"
              className="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart(product);
              }}
            >
              Add to Cart{" "}
              <i
                style={{ marginLeft: "20px" }}
                className="fas fa-arrow-right pe-3"
              ></i>
            </a>
            <a href="single-product.html" className="view-btn">
              <i className="icon icon-screen-full"></i>
            </a>
            <a href="#" className="wishlist-btn">
              <i className="icon icon-heart"></i>
            </a>
          </div>
        </div>
        <div className="product-detail d-flex justify-content-between align-items-center mt-4">
          <h4 className="product-title">{product.name}</h4>
          <p className="fs-5 fw-normal">₦{product.price}</p>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    axios
      .post("http://localhost:8000/api/cart/", {
        product_id: product.id,
        quantity: 1, // Set quantity as needed
      })
      .then((response) => {
        console.log("Added to cart:", response.data);
        addToCart(response.data);
      })
      .catch((error) => console.error("Error adding to cart:", error));
  };

  return (
    <section id="new-arrival" className="product-store">
      <div className="container">
        <h2 className="display-5 fw-light text-uppercase text-center mb-5">
          New Arrivals
        </h2>
        <div className="row">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
