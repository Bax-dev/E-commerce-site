import React from 'react'

const Footer = () => {
    return(
        <footer id="footer" class="bg-black">
        <div class="container padding-medium pt-5">
          <div class="row mt-5">
            <div class="col-md-4 offset-md-1">
              <div class="footer-menu">
                <h1 style={{ fontSize: '25px' }}>Street Wears</h1>
                <div class="social-links mt-4">
                  <ul class="d-flex list-unstyled gap-3">
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon fs-5 text-white me-4" icon="ri:facebook-fill"></iconify-icon>
                      </a>
                    </li>
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon fs-5 text-white me-4" icon="ri:twitter-fill"></iconify-icon>
                      </a>
                    </li>
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon fs-5 text-white me-4" icon="ri:pinterest-fill"></iconify-icon>
                      </a>
                    </li>
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon fs-5 text-white me-4" icon="ri:instagram-fill"></iconify-icon>
                      </a>
                    </li>
                    <li class="social">
                      <a href="#">
                        <iconify-icon class="social-icon fs-5 text-white me-4" icon="ri:youtube-fill"></iconify-icon>
                      </a>
                    </li>
    
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="footer-menu">
                <h6 class="text-uppercase fw-bold text-white mb-4">Quick Links</h6>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <a href="#" class="footer-link">Home</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">About us</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">Offer </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">Services</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">Conatct Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <div class="footer-menu">
                <h6 class="text-uppercase fw-bold text-white mb-4">About</h6>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <a href="#" class="footer-link">How It Work</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">Our Packages</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">promotions</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">refer a friend</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <div class="footer-menu">
                <h6 class="text-uppercase fw-bold text-white mb-4">Help Center</h6>
                <ul class="menu-list list-unstyled">
                  <li class="menu-item">
                    <a href="#" class="footer-link">Payments</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">Shipping</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">Product returns </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">FAQs</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">Checkout</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-link">other Issues</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    )
}
export default Footer;
