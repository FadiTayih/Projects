import React from 'react';
import useFireStore from './../hooks/useFireStore';
import { motion } from 'framer-motion';
function ImageGrid({ setSelectedImage }) {
  const { docs } = useFireStore('images');
  console.log(docs);
  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='img-wrap'
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImage(doc.url)}
            key={doc.id}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt='uploaded pics'
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
