import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const HeroComponent = () => {
  const heroRef = useRef(null);
  const typedRef = useRef(null);

  // Initialize Typed.js effect
  useEffect(() => {
    const options = {
      strings: ["Fullstack Developer.", "Machine Learning Enthusiast.", "Creative Thinker."],
      typeSpeed: 60,
      backSpeed: 40,
      startDelay: 1000,
      loop: true,
      backDelay: 2000,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div ref={heroRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Simulated light effect using colored nested divs */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: '70px', height: '70px', backgroundColor: '#ff4563', filter: 'blur(50px)' }}></div>
      <div style={{ position: 'absolute', top: '20%', right: '20%', width: '50px', height: '50px', backgroundColor: '#ffd700', filter: 'blur(40px)' }}></div>
      <div style={{ position: 'absolute', bottom: '25%', left: '30%', width: '60px', height: '60px', backgroundColor: '#32cd32', filter: 'blur(45px)' }}></div>
      <div style={{ position: 'absolute', bottom: '15%', right: '25%', width: '80px', height: '80px', backgroundColor: '#00bfff', filter: 'blur(55px)' }}></div>
      
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}
      >
        <h1>Hello <span role="img" aria-label="hand waving">👋</span></h1>
      </motion.div>
      <div
        ref={typedRef}
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Arial, sans-serif', fontSize: '1.5rem' }}
      ></div>
    </div>
  );
};

export default HeroComponent;