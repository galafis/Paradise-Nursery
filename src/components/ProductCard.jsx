import React from 'react';

function ProductCard({ plant, onAddToCart, isInCart }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={plant.image} alt={plant.name} style={styles.image} />
        <span style={styles.category}>{plant.category}</span>
      </div>
      <div style={styles.content}>
        <h3 style={styles.name}>{plant.name}</h3>
        <p style={styles.description}>{plant.description}</p>
        <div style={styles.footer}>
          <span style={styles.price}>${plant.price.toFixed(2)}</span>
          <button
            style={{
              ...styles.button,
              ...(isInCart ? styles.buttonDisabled : {}),
            }}
            onClick={() => !isInCart && onAddToCart(plant)}
            disabled={isInCart}
          >
            {isInCart ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  },
  imageContainer: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  category: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(45, 80, 22, 0.9)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  content: {
    padding: '1rem',
  },
  name: {
    margin: '0 0 0.5rem',
    fontSize: '1.1rem',
    color: '#2d5016',
  },
  description: {
    margin: '0 0 1rem',
    fontSize: '0.85rem',
    color: '#666',
    lineHeight: 1.4,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#2d5016',
  },
  button: {
    backgroundColor: '#4a7c25',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.85rem',
    transition: 'background-color 0.2s',
  },
  buttonDisabled: {
    backgroundColor: '#999',
    cursor: 'not-allowed',
  },
};

export default ProductCard;
