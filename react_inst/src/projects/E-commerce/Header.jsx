import React from 'react';

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <select className="language-selector">
            <option>English</option>
          </select>
          <select className="currency-selector">
            <option>Indian</option>
           
          </select>
        </div>
        <div className="header-right">
          <span><h1>Sell/ Buy on E-Commerce Demo</h1></span>
        </div>
      </div>
      <div className="header-main">
        <div className="logo">
          <h1>E-Commerce Demo</h1>
        </div>
        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#pages">Pages</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className="header-actions">
          <input type="text" placeholder="Search for items..." className="search-bar" />
          <button className="search-btn">Search</button>
          <button className="account-btn">👤</button>
          <button onClick={onCartClick} className="cart-button">
            🛒 ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
