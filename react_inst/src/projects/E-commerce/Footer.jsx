import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-features">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Free Delivery</h3>
          <p>For all orders over Rs. 5000</p>
        </div>
        <div className="feature">
          <div className="feature-icon">↩️</div>
          <h3>90 Days Return</h3>
          <p>If goods have problems</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔒</div>
          <h3>Secure Payment</h3>
          <p>100% secure payment</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📞</div>
          <h3>24/7 Support</h3>
          <p>Dedicated support</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🎁</div>
          <h3>Gift Service</h3>
          <p>Support gift service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
