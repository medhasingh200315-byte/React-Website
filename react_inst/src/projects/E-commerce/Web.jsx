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
  { id: 1, name: 'Laptop', price: 7000, description: 'A high-performance laptop for work and gaming.', image: 'https://cdn.mos.cms.futurecdn.net/FUi2wwNdyFSwShZZ7LaqWf.jpg' },
  { id: 2, name: 'Smartphone', price: 17000, description: 'Latest smartphone with advanced features.', image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/f/n/u/-original-imagx9egm9mgmvab.jpeg?q=90' },
  { id: 3, name: 'Headphones', price: 800, description: 'Noise-cancelling headphones for music lovers.', image: 'https://kreo-tech.com/cdn/shop/files/Artboard_1_9.png?v=1753673089' },
  { id: 4, name: 'Tablet', price: 25000, description: 'Portable tablet for entertainment and productivity.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC9lQV8FBTauviAK_BntKM-wBBwTGVqrIvA&shttps://via.placeholder.com/200' },
  { id: 5, name: 'Television', price: 50000, description: 'Experience stunning visuals and brilliant color with our new 4K Ultra HD TV. Its not just a TV—its your portal to cinematic worlds, with smart features built in for endless entertainment..', image: 'https://havells.com/media/catalog/product/cache/844a913d283fe95e56e39582c5f2767b/g/l/gl43u4d2ef_front.jpg' },
  { id: 6, name: 'Watch', price: 300, description: 'Stay connected, track your fitness, and manage your day, all from your wrist. Our sleek smartwatch is the perfect blend of style and technology, keeping you on top of every moment without missing a beat..', image: 'https://hammeronline.in/cdn/shop/files/Hammerglidebluetoothcallingsmartwatch_1.webp?v=1694851875' },
  { id: 7, name: 'Computer', price: 19000, description: 'Unlock your potential with a computer built for speed and performance. Whether you are creating, gaming, or just getting work done, its powerful processor and seamless design make every task feel effortless..', image: 'https://www.hindustantimes.com/ht-img/img/2025/07/04/1600x900/computers_under_Rs_10000_1751609751440_1751609762564.png' },
  { id: 8, name: 'Speaker', price: 10000, description: 'Fill your space with rich, crystal-clear sound. From powerful bass to crisp highs, our portable speaker delivers an immersive audio experience that brings your favorite music and podcasts to life, anywhere you go.', image: 'https://www.theaudiostore.in/cdn/shop/files/sony-ult-field-1-wireless-portable-speaker-black-43933713563903.png?v=1744393287&width=1200' },
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
