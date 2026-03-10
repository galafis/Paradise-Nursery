import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartItemCount }) {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>&#127793;</span>
          <h1 style={styles.title}>Paradise Nursery</h1>
        </Link>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/products" style={styles.navLink}>Plants</Link>
          <Link to="/cart" style={styles.cartLink}>
            &#128722; Cart
            {cartItemCount > 0 && (
              <span style={styles.badge}>{cartItemCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#2d5016',
    color: 'white',
    padding: '1rem 2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    color: 'white',
  },
  logoIcon: {
    fontSize: '2rem',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'opacity 0.2s',
  },
  cartLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    position: 'relative',
    backgroundColor: '#4a7c25',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
  },
};

export default Header;
