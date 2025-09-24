import React from 'react';
import Carousel from './Carousel';

function Hero({ products }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="version"><u>Electronics Items at best deals!</u></span>
          <h1>30% DISCOUNT</h1>
          <p><i>Welcome to a world of cutting-edge technology and innovation! Our electronics e-commerce site is your go-to source for the latest gadgets.</i></p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="hero-carousel">
          <Carousel products={products} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
