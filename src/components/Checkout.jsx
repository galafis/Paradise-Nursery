import React from 'react';
import { Link } from 'react-router-dom';

function Checkout({ cartItems, onClearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully! Thank you for shopping at Paradise Nursery.');
    onClearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Checkout</h2>
        <div style={styles.emptyState}>
          <p>No items to checkout. Add plants to your cart first.</p>
          <Link to="/products" style={styles.shopLink}>Browse Plants</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout</h2>

      <div style={styles.layout}>
        <div style={styles.formSection}>
          <h3 style={styles.sectionTitle}>Shipping Information</h3>
          <div style={styles.formGrid}>
            <input type="text" placeholder="First Name" style={styles.input} />
            <input type="text" placeholder="Last Name" style={styles.input} />
            <input type="email" placeholder="Email Address" style={{ ...styles.input, gridColumn: '1 / -1' }} />
            <input type="text" placeholder="Street Address" style={{ ...styles.input, gridColumn: '1 / -1' }} />
            <input type="text" placeholder="City" style={styles.input} />
            <input type="text" placeholder="State" style={styles.input} />
            <input type="text" placeholder="ZIP Code" style={styles.input} />
            <input type="text" placeholder="Country" style={styles.input} />
          </div>

          <h3 style={styles.sectionTitle}>Payment Method</h3>
          <div style={styles.formGrid}>
            <input type="text" placeholder="Card Number" style={{ ...styles.input, gridColumn: '1 / -1' }} />
            <input type="text" placeholder="MM/YY" style={styles.input} />
            <input type="text" placeholder="CVV" style={styles.input} />
          </div>
        </div>

        <div style={styles.orderSummary}>
          <h3 style={styles.sectionTitle}>Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} style={styles.orderItem}>
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div style={styles.divider}></div>
          <div style={styles.orderItem}>
            <span>Subtotal ({totalItems} items)</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div style={styles.orderItem}>
            <span>Shipping</span>
            <span style={{ color: '#4a7c25' }}>Free</span>
          </div>
          <div style={{ ...styles.orderItem, ...styles.totalItem }}>
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <button style={styles.placeOrderBtn} onClick={handlePlaceOrder}>
            Place Order
          </button>
          <Link to="/cart" style={styles.backLink}>Back to Cart</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  title: {
    color: '#2d5016',
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  emptyState: {
    textAlign: 'center',
    padding: '3rem',
    color: '#888',
  },
  shopLink: {
    color: '#4a7c25',
    fontWeight: 600,
  },
  layout: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  formSection: {
    flex: '1 1 500px',
  },
  sectionTitle: {
    color: '#2d5016',
    marginBottom: '1rem',
    marginTop: '1.5rem',
    fontSize: '1.1rem',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.75rem',
  },
  input: {
    padding: '12px 16px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  orderSummary: {
    flex: '0 0 350px',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
    height: 'fit-content',
  },
  orderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    fontSize: '0.9rem',
  },
  divider: {
    borderTop: '1px solid #eee',
    margin: '0.5rem 0',
  },
  totalItem: {
    borderTop: '2px solid #2d5016',
    paddingTop: '0.75rem',
    marginTop: '0.5rem',
    fontSize: '1.1rem',
  },
  placeOrderBtn: {
    width: '100%',
    backgroundColor: '#2d5016',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    marginTop: '1.5rem',
  },
  backLink: {
    display: 'block',
    textAlign: 'center',
    color: '#4a7c25',
    textDecoration: 'none',
    marginTop: '0.75rem',
    fontSize: '0.9rem',
  },
};

export default Checkout;
