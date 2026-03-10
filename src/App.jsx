import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import plants from './data/plants';

function LandingPage() {
  return (
    <div style={landingStyles.hero}>
      <div style={landingStyles.overlay}>
        <h1 style={landingStyles.heading}>Welcome to Paradise Nursery</h1>
        <p style={landingStyles.subheading}>
          Discover our curated collection of beautiful plants for every space.
          From low-maintenance succulents to statement tropical plants,
          we have the perfect green companion for you.
        </p>
        <a href="/products" style={landingStyles.ctaButton}>
          Shop Now
        </a>
      </div>
    </div>
  );
}

const landingStyles = {
  hero: {
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(135deg, #2d5016 0%, #4a7c25 50%, #8fbe5a 100%)',
    padding: '2rem',
  },
  overlay: {
    textAlign: 'center',
    color: 'white',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 800,
  },
  subheading: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    marginBottom: '2rem',
    opacity: 0.9,
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: 'white',
    color: '#2d5016',
    padding: '14px 32px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.1rem',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === plant.id);
      if (existing) {
        return prev.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f0', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <Header cartItemCount={cartItemCount} />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/products"
              element={
                <ProductList
                  plants={plants}
                  onAddToCart={addToCart}
                  cartItems={cartItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  onUpdateQuantity={updateQuantity}
                  onRemoveItem={removeItem}
                  onContinueShopping={() => {}}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Checkout
                  cartItems={cartItems}
                  onClearCart={clearCart}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
