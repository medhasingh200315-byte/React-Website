import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import ProductList from './ProductList';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';
import Footer from './Footer';

// Sample product data
const initialProducts = [
  { id: 1, name: 'Laptop', price: 999, description: 'A high-performance laptop for work and gaming.', image: 'https://cdn.mos.cms.futurecdn.net/FUi2wwNdyFSwShZZ7LaqWf.jpg' },
  { id: 2, name: 'Smartphone', price: 699, description: 'Latest smartphone with advanced features.', image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/f/n/u/-original-imagx9egm9mgmvab.jpeg?q=90' },
  { id: 3, name: 'Headphones', price: 199, description: 'Noise-cancelling headphones for music lovers.', image: 'https://kreo-tech.com/cdn/shop/files/Artboard_1_9.png?v=1753673089' },
  { id: 4, name: 'Tablet', price: 499, description: 'Portable tablet for entertainment and productivity.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC9lQV8FBTauviAK_BntKM-wBBwTGVqrIvA&s' },
];

function App() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const viewProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const proceedToCheckout = () => {
    setShowCheckout(true);
    setShowCart(false);
  };

  const goBackToCart = () => {
    setShowCheckout(false);
    setShowCart(true);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} onCartClick={toggleCart} />
      <Hero products={products} />
      {showCheckout ? (
        <Checkout cart={cart} onBack={goBackToCart} />
      ) : showCart ? (
        <Cart cart={cart} onRemove={removeFromCart} onCheckout={proceedToCheckout} />
      ) : selectedProduct ? (
        <ProductDetails product={selectedProduct} onAddToCart={addToCart} onClose={closeProductDetails} />
      ) : (
        <ProductList products={products} onViewDetails={viewProductDetails} onAddToCart={addToCart} />
      )}
      <Footer />
    </div>
  );
}

export default App;
