import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home"
    >
      <h1>Welcome to MyFlix Store</h1>
      <p>Discover premium products just like you binge-watch your favorite series.</p>
    </motion.div>
  );
};

export default Home;
