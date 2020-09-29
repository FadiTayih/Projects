import React, { useEffect } from 'react';
import useStorage from './../hooks/useStorage';
import { motion } from 'framer-motion';
const ProcessBar = ({ file, setFile }) => {
  const { url, process } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: process + '%' }}
      className='progress-bar'
    ></motion.div>
  );
};

export default ProcessBar;
