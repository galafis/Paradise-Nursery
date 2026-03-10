import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.heading}>Paradise Nursery</h3>
          <p style={styles.text}>
            Bringing nature closer to you with carefully curated plants
            for every space and experience level.
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <p style={styles.text}>Home | Plants | Cart | About</p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact</h3>
          <p style={styles.text}>contact@paradisenursery.com</p>
          <p style={styles.text}>+1 (555) 123-4567</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} Paradise Nursery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1a3009',
    color: '#ccc',
    padding: '2rem',
    marginTop: '3rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  section: {
    flex: '1 1 250px',
  },
  heading: {
    color: '#8fbe5a',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
  },
  text: {
    margin: '0.3rem 0',
    fontSize: '0.9rem',
    lineHeight: 1.5,
  },
  bottom: {
    maxWidth: '1200px',
    margin: '2rem auto 0',
    borderTop: '1px solid #333',
    paddingTop: '1rem',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '0.85rem',
    color: '#888',
  },
};

export default Footer;
