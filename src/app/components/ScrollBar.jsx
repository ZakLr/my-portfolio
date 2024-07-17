import React from 'react';
import { motion, useViewportScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.div className="absolute left-0 top-0 h-full z-50 rotate-0" style={{ width: '5px', backgroundColor: '#ccc' }}>
      <motion.div
        style={{ width: '100%', backgroundColor: '#4B9CE2', scaleX: 1, backgroundColor: '#4B9CE2' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: scrollYProgress }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
    </motion.div>
  );
};

export default ProgressBar;