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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.5, duration: 1, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Layer - Centered and Responsively Sized */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full flex items-center justify-center p-6 md:p-12"
      >
        <img 
          src={loadingBg} 
          alt="Loading Background" 
          className="w-full h-full object-contain max-w-[90%] max-h-[70%] md:max-w-[50%] lg:max-w-[60%] transition-all duration-500"
        />
      </motion.div>

      {/* Loading Progress Bar Overlay */}
      <motion.div 
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-20 left-0 right-0 flex flex-col items-center px-6"
      >
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
        <p className="mt-4 text-[#0D6D7E]/40 font-serif italic tracking-[0.3em] text-[10px] uppercase">
          Authentic Lebanese Experience
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;