"use client";

import React from 'react';
import { motion } from 'framer-motion';
import loadingBg from '@/assets/loading-bg.jpg';

const LoadingScreen = () => {
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-end pb-[15vh] md:pb-[10vh]"
    >
      {/* Background Image - Using object-cover to ensure it fills the screen on all aspect ratios */}
      <div className="absolute inset-0">
        <img 
          src={loadingBg} 
          alt="Loading Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* Loader Content - Positioned relative to the bottom for better responsiveness */}
      <motion.div 
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full px-6"
      >
        <p className="mb-4 text-[#0D6D7E] font-serif italic tracking-[0.3em] text-[10px] sm:text-xs uppercase text-center drop-shadow-sm">
          Authentic Lebanese Experience
        </p>
        
        <div className="w-32 sm:w-40 md:w-48 h-[2px] bg-[#0D6D7E]/10 rounded-full overflow-hidden relative shadow-sm">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.8, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-[#0D6D7E]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;