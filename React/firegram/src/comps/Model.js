import React from 'react';
import { motion } from 'framer-motion';
function Model({ selectedImage, setSelectedImage }) {
  const onHandleClose = (e) => {
    if (e.target.classList.contains('backdrop')) setSelectedImage(null);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='backdrop'
      onClick={onHandleClose}
    >
      <motion.img
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        src={selectedImage}
        alt='englarged Image'
      />
    </motion.div>
  );
}

export default Model;
