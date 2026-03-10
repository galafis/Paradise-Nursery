import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onContinueShopping }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Your Cart</h2>
        <div style={styles.emptyCart}>
          <p style={styles.emptyIcon}>&#128722;</p>
          <p style={styles.emptyText}>Your cart is empty</p>
          <Link to="/products" style={styles.shopButton}>Browse Plants</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Cart ({totalItems} items)</h2>

      <div style={styles.cartLayout}>
        <div style={styles.itemsList}>
          {cartItems.map(item => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <div style={styles.itemDetails}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemPrice}>${item.price.toFixed(2)} each</p>
                <div style={styles.quantityControls}>
                  <button
                    style={styles.qtyBtn}
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span style={styles.quantity}>{item.quantity}</span>
                  <button
                    style={styles.qtyBtn}
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div style={styles.itemRight}>
                <p style={styles.subtotal}>${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  style={styles.removeBtn}
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.summary}>
          <h3 style={styles.summaryTitle}>Order Summary</h3>
          <div style={styles.summaryRow}>
            <span>Subtotal ({totalItems} items)</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Shipping</span>
            <span style={{ color: '#4a7c25' }}>Free</span>
          </div>
          <div style={{ ...styles.summaryRow, ...styles.totalRow }}>
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <Link to="/checkout" style={styles.checkoutBtn}>
            Proceed to Checkout
          </Link>
          <Link to="/products" style={styles.continueBtn} onClick={onContinueShopping}>
            Continue Shopping
          </Link>
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
  emptyCart: {
    textAlign: 'center',
    padding: '4rem 2rem',
  },
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },
  emptyText: {
    fontSize: '1.2rem',
    color: '#888',
    marginBottom: '1.5rem',
  },
  shopButton: {
    backgroundColor: '#4a7c25',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
  },
  cartLayout: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  itemsList: {
    flex: '1 1 600px',
  },
  cartItem: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
    marginBottom: '1rem',
    alignItems: 'center',
  },
  itemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    margin: '0 0 0.3rem',
    color: '#2d5016',
    fontSize: '1.1rem',
  },
  itemPrice: {
    color: '#888',
    margin: '0 0 0.5rem',
    fontSize: '0.9rem',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  qtyBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '2px solid #4a7c25',
    backgroundColor: 'transparent',
    color: '#4a7c25',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: '1.1rem',
    fontWeight: 600,
    minWidth: '24px',
    textAlign: 'center',
  },
  itemRight: {
    textAlign: 'right',
  },
  subtotal: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#2d5016',
    margin: '0 0 0.5rem',
  },
  removeBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#e74c3c',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
  summary: {
    flex: '0 0 320px',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
    height: 'fit-content',
    position: 'sticky',
    top: '100px',
  },
  summaryTitle: {
    color: '#2d5016',
    marginBottom: '1rem',
    fontSize: '1.2rem',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #eee',
    fontSize: '0.95rem',
  },
  totalRow: {
    borderBottom: 'none',
    paddingTop: '1rem',
    fontSize: '1.15rem',
  },
  checkoutBtn: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#4a7c25',
    color: 'white',
    padding: '12px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    marginTop: '1rem',
  },
  continueBtn: {
    display: 'block',
    textAlign: 'center',
    color: '#4a7c25',
    padding: '12px',
    textDecoration: 'none',
    fontWeight: 500,
    marginTop: '0.5rem',
  },
};

export default Cart;
