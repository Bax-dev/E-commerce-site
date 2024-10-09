import React from 'react';

function Base() {
  return (
    <div>
      {/* SVG definitions can be moved to a separate SVG component file */}


      <div>
        
        <section id="hero" style={{ backgroundImage: 'url(images/banner-img1.jpg)' }}>
          <div className="container padding-large">
            <div className="row">
              <div className="col-md-6 col-lg-5 offset-md-2 text-center bg-black p-5">
                <h2 className="display-1 banner-text text-uppercase text-white mt-3">Street Wears</h2>
                <p className="text-uppercase text-white mb-4">High quality cool tshirts for street fashion</p>
                <a href="#" className="btn btn-outline-light btn-wrap">
                  Start Shopping <i className="icon icon-arrow-io fs-5 align-text-bottom"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="service" class="padding-medium">
          <div class="container">
            <div class="row g-md-5 pt-4">
              <div class="col-md-3 my-3">
                <div class="card">
                  <div>
                    <iconify-icon class="service-icon text-primary fs-2" icon="ci:shopping-cart-02"></iconify-icon>
                  </div>
                  <h4 class="py-2 m-0">Free Delivery</h4>
                  <div class="card-text">
                    <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 my-3">
                <div class="card">
                  <div>
                    <iconify-icon class="service-icon text-primary fs-2" icon="tdesign:secured"></iconify-icon>
                  </div>
                  <h4 class="py-2 m-0">100% secure payment</h4>
                  <div class="card-text">
                    <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 my-3">
                <div class="card">
                  <div>
                    <iconify-icon class="service-icon text-primary fs-2" icon="la:award"></iconify-icon>
                  </div>
                  <h4 class="py-2 m-0">Quality guarantee</h4>
                  <div class="card-text">
                    <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 my-3">
                <div class="card">
                  <div>
                    <iconify-icon class="service-icon text-primary fs-2" icon="solar:dollar-outline"></iconify-icon>
                  </div>
                  <h4 class="py-2 m-0">Daily Offer</h4>
                  <div class="card-text">
                    <p class="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Base;
