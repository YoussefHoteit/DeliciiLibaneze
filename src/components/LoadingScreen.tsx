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
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 1.2, duration: 0.8 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={loadingBg} 
          alt="Loading Background" 
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Loader Content - Positioned at the bottom to not overlap the logo in the image */}
      <motion.div 
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mt-[450px] md:mt-[500px] flex flex-col items-center w-full px-6"
      >
        <p className="mb-4 text-[#0D6D7E] font-serif italic tracking-[0.3em] text-[10px] md:text-xs uppercase text-center">
          Authentic Lebanese Experience
        </p>
        
        <div className="w-32 md:w-48 h-[2px] bg-[#0D6D7E]/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
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