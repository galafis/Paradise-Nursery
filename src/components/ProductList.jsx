import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ plants, onAddToCart, cartItems }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(plants.map(p => p.category))];

  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          plant.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartIds = new Set(cartItems.map(item => item.id));

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Plants Collection</h2>

      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <div style={styles.categoryButtons}>
          {categories.map(cat => (
            <button
              key={cat}
              style={{
                ...styles.categoryBtn,
                ...(selectedCategory === cat ? styles.categoryBtnActive : {}),
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p style={styles.count}>Showing {filteredPlants.length} plants</p>

      <div style={styles.grid}>
        {filteredPlants.map(plant => (
          <ProductCard
            key={plant.id}
            plant={plant}
            onAddToCart={onAddToCart}
            isInCart={cartIds.has(plant.id)}
          />
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <p style={styles.empty}>No plants found matching your criteria.</p>
      )}
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
  filters: {
    marginBottom: '1.5rem',
  },
  searchInput: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px 16px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    marginBottom: '1rem',
    outline: 'none',
  },
  categoryButtons: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  categoryBtn: {
    padding: '8px 16px',
    border: '2px solid #4a7c25',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    color: '#4a7c25',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.9rem',
    transition: 'all 0.2s',
  },
  categoryBtnActive: {
    backgroundColor: '#4a7c25',
    color: 'white',
  },
  count: {
    color: '#888',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    fontSize: '1.1rem',
    padding: '3rem',
  },
};

export default ProductList;
