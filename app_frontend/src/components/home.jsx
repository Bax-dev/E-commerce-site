import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import NewsletterSignup from "./newsletter";
import ProductList from "./ProductList";

function Home() {
  return (
    <>
      <NavBar />

      <section
        id="hero"
        style={{ backgroundImage: "url('images/banner-img1.jpg')" }} >
        <div className="container padding-large">
          <div className="row">
            <div className="col-md-6 col-lg-5 offset-md-2 text-center bg-black p-5">
              <h2 className="display-1 banner-text text-uppercase text-white mt-3">
                Street Wears
              </h2>
              <p className="text-uppercase text-white mb-4">
                High quality cool tshirts for street fashion
              </p>
              <a href="#" className="btn btn-outline-light btn-wrap">
                Start Shopping{" "}
                <i className="icon icon-arrow-io fs-5 align-text-bottom"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="padding-medium">
        <div className="container">
          <div className="row g-md-5 pt-4">
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary fs-2"
                    icon="ci:shopping-cart-02"
                  ></iconify-icon>
                </div>
                <h4 className="py-2 m-0">Free Delivery</h4>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                  Enjoy the convenience of shopping from the comfort of your home with our free delivery service! At Street Wears, we believe in making fashion accessible to everyone
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary fs-2"
                    icon="tdesign:secured"
                  ></iconify-icon>
                </div>
                <h4 className="py-2 m-0" style={{textWrap:"nowrap"}}>Secure payment</h4>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                  Our security is our top priority at Street Wears. We provide a 100% secure payment process, ensuring that your personal and financial information is fully protected
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary fs-2"
                    icon="la:award"
                  ></iconify-icon>
                </div>
                <h4 className="py-2 m-0">Quality guarantee</h4>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                  At Street Wears, we stand behind the quality of our products. 
                  Our commitment to excellence means that each item is crafted with the finest materials and attention to detail
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary fs-2"
                    icon="solar:dollar-outline"
                  ></iconify-icon>
                </div>
                <h4 className="py-2 m-0">Daily Offer</h4>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                  on't miss out on our exciting Daily Offers at Street Wears! Every day,
                   we bring you exclusive deals on the trendiest streetwear styles, allowing you to elevate your wardrobe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductList/>
      
  <section id="category" class="padding-medium">
    <div class="container-fluid">
      <div class="row px-md-5">

        <div class="col-md-4 position-relative">
          <div class="z-1 position-absolute bottom-0 start-0 m-3 mg-lg-5 ps-4 text-white">
            <h5 class="text-light text-uppercase">Printed T-Shirts</h5>
          </div>
          <div class="image-holder zoom-effect">
            <a href="single-post.html">
              <img src="images/category1.jpg" alt="img" class="post-image img-fluid"/>
            </a>
          </div>
        </div>
        <div class="col-md-4 position-relative ">
          <div class="z-1 position-absolute bottom-0 start-0 m-3 mg-lg-5 ps-4 text-white">
            <h5 class="text-light text-uppercase">Mono T-Shirts</h5>
          </div>
          <div class="image-holder zoom-effect">
            <a href="single-post.html">
              <img src="images/category3.jpg" alt="img" class="post-image img-fluid"/>
            </a>
          </div>
        </div>
        <div class="col-md-4 position-relative">
          <div class="z-1 position-absolute bottom-0 start-0 m-3 mg-lg-5 ps-4 text-white">
            <h5 class="text-light text-uppercase">Graphic Hoodies</h5>
          </div>
          <div class="image-holder zoom-effect">
            <a href="single-post.html">
              <img src="images/category2.jpg" alt="img" class="post-image img-fluid"/>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

      <NewsletterSignup />
      <Footer />
    </>
  );
}

export default Home;
