import React from 'react';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {[product1, product2, product3].map((product, index) => (
          <motion.div
            key={index}
            className="product-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={product} alt={`Product ${index + 1}`} />
            <h3>Product {index + 1}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
