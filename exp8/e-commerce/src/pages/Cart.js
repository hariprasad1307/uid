import React from 'react';
import { motion } from 'framer-motion';

const Cart = () => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="cart"
    >
      <h1>Your Cart</h1>
      <p>Items in your cart will appear here.</p>
    </motion.div>
  );
};

export default Cart;
