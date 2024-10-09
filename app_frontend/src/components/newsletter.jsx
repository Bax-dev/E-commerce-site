import React, { useState } from 'react';
import axios from 'axios';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://127.0.0.1:8000/api/newletter/', { email })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setMessage(error.response.data.email || 'Something went wrong');
        }
      });
  };

  return (
    <section id="register" style={{ backgroundImage: "url(images/background-img.jpg)" }}>
      <div className="container padding-medium">
        <div className="row banner-content align-items-center">
          <div className="col-md-4 offset-md-1">
            <h2 className="register-text text-white mt-3">
              Get <span><em>20% OFF</em></span> on your first purchase
            </h2>
            <p className="mb-4">Sign Up for our newsletter and never miss any offers</p>
          </div>
          <div className="col-md-4 offset-md-1">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input 
                  type="email"
                  className="form-control form-control-lg rounded-3"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg rounded-3">Register it now</button>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSignup;
